import React from "react";
import PropTypes from "prop-types";

import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * TODO: resizing
 * TODO: separate logic from React component to React-independent module
 * TODO: after separation, write tests
 * TODO: check vertical resizing of columns content (like accordions!)
 */

/**
 * Problems:
 *
 * Following use case is interesting:
 *
 * Let's imagine we close accordion in smart column so that it becomes half of its height (and its height will be smaller than viewport height).
 * 1) if we keep stickiness as bottom ({ position: sticky, bottom: 0 }), it will stick to bottom which is obviously stupid (if less than viewport, should stick to top)
 * 2) if we keep stickiness as top  ({ position: sticky, top: -500px }), it will have bad state. It means it will be partly visible although it should be fully visible.
 *
 * Getting reasonable listener on content resize seems not very possible (ResizeListener almost totally not compatible with browsers).
 * This leaves us only with CSS and static approach. Especially because height (accordion anim) might be animated (a lot of events / performance).
 *
 * Finding solution which handles smooth change + good performance is impssible, actually this "smart scrolling" should be implemented by browser vendors (double ended sticky!)
 *
 * Best solution which avoids "jitters" and is most reasonable is:
 * 1) use (2)
 * 2) AS A GUIDELINE: do not create huge accordions etc. It shouldn't be possible to decrease smart column content height by A LOT.
 *
 * Solution (1) would be better if we KNOW that smart content is long enough it will never be higher than viewport.
 *
 * We could keep both strategies possible as an option.
 *
 *
 *
 * -----
 *
 * FUCK
 *
 * When you remove content, it works. But when you ADD content, top: VAL when scrolling down should be recalculated!!!!! :( :( :(
 *
 * Well, we should remember size. And onscroll, if size changed, we should adjust.
 *
 * But animations will suck!!!! We'd adjust on every scroll this is terrible.
 *
 * This happens ONLY when content is once smaller, once bigger than viewport. What about min-height: 100%???
 *
 * Well, not very possible because if content is 50vh, then at the bottom there's gonna be empty space.
 *
 *
 * What if:
 *
 * - there's a column and it's position: sticky.
 * - there's a content wrapper in column with min-height: 100%;
 * - the content IN this wrapper is ALSO position: sticky top: 0; -> this one would prevent stupid effect at the bottom
 *
 *
 STANDARD COLUMN
 +----------------------------------+
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |      SMART COLUMN
 |                                  |   +------------------------------+
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   |                              |
 +---------------------------------------------------------------------------+
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |                                  |   |                              |  |
 |  |           BROWSER                |   |                              |  |
 +---------------------------------------------------------------------------+
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   |                              |
 |                                  |   +------------------------------+
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 |                                  |
 +----------------------------------+



 *
 * A lot of traumatic thoughts related to this component, but I'd like to make some summary.
 *
 * First, requirements of good UX (ALL of them).
 * 1. Double sticky behaviour must be correct (that's a foundation).
 * 2. When you "uncollapse content" inside the column, it should uncollapse DOWN, unless there's no space.
 * 3. When you "collapse content" inside the column, it should collapse UP (there's always a space).
 * 4. When you "collapse content" inside the column, and it becomes less than 100vh high, it should snap to the viewport,
 *    so that it is visible. This means that content less than 100vh high should always be fully visible. In all cases.
 * 5. When you "uncollapse content" inside the column and you're at the bottom of the container, it should uncollapse UP.
 *    Content can't never stick out of container unless it's higher than container.
 *
 * Notes:
 * 1. Solution with margin-top / margin-bottom is nice, but it doesn't work with (5). margin is "height creator" and column
 *    might be higher than container even if it isn't. Solution could be min-height.
 * 2. min-height is nice but min-height + flex-end makes content always grow up, which usually breaks (2).
 * 3. flexbox is not a help (top filler and bottom filler with good flex-grow / flex-shrink). It would require setting
 *    flex-basis on some filler in pixels and it also creates height.
 * 4. bottom: 0 with min-height usually means breaking (2).
 * 5. top: -X always is good for (2) but breaks (4)
 *
 *
 * Solutions and approaches we took during development:
 * 1. First was very simple. When you scroll down, you get bottom: 0 and margin-top. When you scroll up, other way round.
 *    This didn't work well, it breaks (5). margin is height creator so column seemed higher than it really was. It could
 *    easily get higher than continer and stick out of container.
 *    Also, if margin-bottom was set (for top: 0), (2) was broken.
 *    Also, (4) could be broken too during resizing.
 * 2. min-height came for the rescue. It didn't create height and behaved properly, didn't break (5).
 *    However, (2) and (4) could still happen.
 * 3. To fix (4), we thought that we could use min-height: 100vh content box and inline another sticky there.
 *    Namely, {position: sticky; top: 0}.
 *    THIS IS IMPORTANT
 *    Having content in min-height: 100vh container with sticky-top0 and this container having
 *    sticky-top0 or sticky-bottom0 gives us 100%-certainty that (4) won't be broken.
 *    We COULD achieve good effect with only-sticky-top or only-sticky-bottom behaviour but this forces us
 *    to use top or bottom which are non-zero. For example stickiness when scrolling down is possible
 *    only with negative top value.
 *    It means that when content is resized, this top/bottom value should be updated. This forces us to
 *    relayout every frame (on resize animation) and that SUCKS.
 *    Conclusion is that we MUST use only bottom: 0 and top: 0 for stickiness, can't use non-zero values.
 * 4. There's a neat trick achieving (1) easily:
 *    We can create outer container with flex-end and bottom: 0 (min-height: height + top margin) and
 *    inner container with flex-start and top: 0.
 *    This solves all except for (2). In many cases content will unroll UP.
 * 5. We can also turn around above solution and use outer container with flex-start an top: 0,
 *    inner with flex-end and bottom: 0. But sadly, we must also add another sticky inside with top: 0,
 *    because content < 100vh would stick to bottom. sticky in sticky in sticky -> yeah.
 * 6. IMPORTANT.
 *    The position of column relative to the container changes as we scroll.
 *    position: sticky is responsible for keeping column in good position (and satisfying requirement (1)).
 *    But!
 *    as we scroll, min-height is not updated.
 *    We could update min-height:
 *    1. on every scroll
 *    2. on every resize (ResizeObserver polyfill).
 *    3. on scroll stop (detect 100-200ms of "not scrolling").
 *    4. on scroll direction change.
 *    Resizing (when animated) and scrolling is not a good moment to update min-height.
 *    It's because it would require re-layout every frame.
 *    This re-layout on my Mac is not heavy (~2ms Chrome), FF and Safari also seems fast.
 *    But still. We shouldn't take so much of a frame time for ourselves.
 *    Resizing on scroll stop makes sense. User usually won't make an action BEFORE
 *    200ms pass after stopping scrolling. It's too fast. That means that update won't happen
 *    during animation or during scroll.
 *    Ofc, it's still possible that they'll interfere but it will be quite rare.
 *
 *    Why it's important to update min-height? Let's get to next point.
 *
 * 7. Scenarios 4. and 5. are good but how do they deal with (2) requirement?
 *    Well, it depenends on what's current state. But in many cases (2) will be violated.
 *
 *    What if we made sure that min-height is updated?
 *
 *    Now it means that (2) requirement will be satisfied for configuration 5. (not 4.).
 *    Why?
 *    Because in 5. content grows "down" (min-height has margin on the bottom).
 *    In 4. it's other way round and content grows "up".
 *
 *    Issues?
 *
 *    Only issue I see is:
 *    1. Updating min-height, but we could use strategy from 6.3. and optionally even 6.1/6.2.
 *    2. After resize, we could also find a need to update min-height. It's when content
 *       becomes bigger than min-height after resize, or will get smaller than viewport and will
 *       snap to top (by innermost sticky).
 *
 *    I think that we MUST update min-height when scroll stops. And when starts!
 *    We COULD use ResizeListener polyfill to update min-height when resizing. That'd make it 100% sure
 *    that we keep good min-height during resize.
 *
 *    There's alternative solution with top: -X, and with only 1-nesting level of sticky.
 *    But it requires updating -X value on resize.
 *
 *    HIPOTHESIS:
 *
 *    If ResizeListener is lean and lightweight, we could update Layout value (top, min-height) on
 *    every resize. That'd make everything sooo much simpler.
 *
 *    We could use top -X and have single level of sticky (no nested stickies - Edge solved).
 *
 *    We shouldn't do this onscroll. Mostly this won't be even neeed.
 *    But only on resize? Shouldn't hurt too much. If height changes it means that user
 *    makes re-layouts anyway!.
 *
 *    Problem is that ResizeListener has 20ms lag and might make layout jitter.
 *    In general, we shouln't trust polyfill in such solution.
 *    (?) Unless we play with it a little bit more. Could be solvable.
 *    (?) We could also register onResize and
 *
 *
 * 8. Triple sticky jitters on Chrome.
 *
 * 9. stickyTop could be saved somewhere. It's a nice concept of non-nested sticky that solves (1).
 *    However, it has problem on resize, should update -X parameter.
 *
 *
 *    PROBLEM SWITH CURNET SOLUTION
 *
 *    1. jittery on chrome.
 *    2. edge
 *    3. tripple sticky :(
 *
 *    (!!!) non-intrusive lightweight onREsize would solve all the problems!!!
 *
 *
 */
//
// const Root = styled.div`
//     display: flex;
//     position: relative;
//     width: 100%;
//     height: 100%;
// `;
//
// const Wrapper1 = styled.div`
//     width: 100%;
//     position: sticky;
//     min-height: 100vh;
//     ${props => props.offset[0].css("top")};
//     align-self: flex-start;
//     display: flex;
// `;
//
// const Wrapper2 = styled.div`
//     width: 100%;
//     position: sticky;
//     ${props => props.offset[1].css("bottom")};
//     align-self: flex-end;
//     min-height: 100vh;
// `;
//
// const Wrapper3 = styled.div`
//     width: 100%;
//     position: sticky;
//     ${props => props.offset[0].css("top")};
// `;

class StickyColumn extends React.Component {
    constructor(props) {
        super(props);

        this.isScrollingDown = false;
        this.pageYOffset = undefined;

        this.divs = {
            container: React.createRef(),
            wrapper1: React.createRef(),
            wrapper2: React.createRef(),
            wrapper3: React.createRef()
        };

        this.rects = {};

        this._onScroll = this._onScroll.bind(this);
        this._onResize = this._onResize.bind(this);
        this._onScrollTimeout = this._onScrollTimeout.bind(this);
    }

    _updateValues() {
        this.pageYOffset = window.pageYOffset;

        this.rects.container = this.divs.container.current.getBoundingClientRect();
        this.rects.wrapper1 = this.divs.wrapper1.current.getBoundingClientRect();
        this.rects.wrapper2 = this.divs.wrapper2.current.getBoundingClientRect();
        this.rects.wrapper3 = this.divs.wrapper3.current.getBoundingClientRect();

        this.topMarginSpace =
            this.rects.wrapper2.top - this.rects.container.top;
    }

    _updateMinHeight() {
        this._updateValues();

        this.divs.wrapper1.current.style.minHeight = `calc(100% - ${
            this.topMarginSpace
        }px)`;
    }

    _onResize() {
        this._updateValues();
    }

    _onScrollTimeout() {
        this._updateMinHeight();
    }

    _onScroll() {
        // After 300ms of NOT SCROLLING, we must update min-height!
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(this._onScrollTimeout, 300);

        let pageYOffsetPrevious = this.pageYOffset;
        this._updateValues();

        if (this.pageYOffset === pageYOffsetPrevious) {
            return;
        }

        let directionChanged = 0;
        if (this.pageYOffset > pageYOffsetPrevious && !this.isScrollingDown) {
            directionChanged = 1; // from up to down
        } else if (
            this.pageYOffset < pageYOffsetPrevious &&
            this.isScrollingDown
        ) {
            directionChanged = -1;
        }

        if (directionChanged === 1) {
            this.isScrollingDown = true;
        } else if (directionChanged === -1) {
            this.isScrollingDown = false;
        }

        // Direction change -> version with (bottom: 0)
        if (directionChanged !== 0) {
            this._updateMinHeight();
        }
    }

    componentDidMount() {
        this._updateValues();

        window.addEventListener("resize", this._onResize);
        window.addEventListener("scroll", this._onScroll);

        this.forceUpdate();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._onResize);
        window.removeEventListener("scroll", this._onScroll);
        clearTimeout(this.scrollTimeout);
    }

    render() {
        let offset = this.props.offset;

        if (Array.isArray(offset)) {
            offset = [rs(offset[0]), rs(offset[1])];
        } else {
            offset = [rs(offset), rs(offset)];
        }

//         const Root = styled.div`
//     display: flex;
//     position: relative;
//     width: 100%;
//     height: 100%;
// `;
//
//         const Wrapper1 = styled.div`
//     width: 100%;
//     position: sticky;
//     min-height: 100vh;
//     ${props => props.offset[0].css("top")};
//     align-self: flex-start;
//     display: flex;
// `;
//
//         const Wrapper2 = styled.div`
//     width: 100%;
//     position: sticky;
//     ${props => props.offset[1].css("bottom")};
//     align-self: flex-end;
//     min-height: 100vh;
// `;
//
//         const Wrapper3 = styled.div`
//     width: 100%;
//     position: sticky;
//     ${props => props.offset[0].css("top")};
// `;

        return <div className={this.props.className} style={this.props.style}>
            <div css={css`
                display: flex;
                position: relative;
                width: 100%;
                height: 100%;
            `} ref={this.divs.container}>
                <div css={css`
                    width: 100%;
                    position: sticky;
                    min-height: 100vh;
                    ${offset[0].css("top")}
                    align-self: flex-start;
                    display: flex;
                `} ref={this.divs.wrapper1}>
                    <div css={css`
                        width: 100%;
                        position: sticky;
                        ${offset[1].css("bottom")}
                        align-self: flex-end;
                        min-height: 100vh;
                    `} ref={this.divs.wrapper2}>
                        <div css={css`
                            width: 100%;
                            position: sticky;
                            ${offset[0].css("top")}
                        `} ref={this.divs.wrapper3}>
                            {this.props.children}
                        </div>

                    </div>
                </div>
            </div>

        </div>


        // return (
        //     <Root
        //         style={this.props.style}
        //         className={this.props.className}
        //         ref={this.divs.container}
        //     >
        //         <Wrapper1 ref={this.divs.wrapper1} offset={offset}>
        //             <Wrapper2 ref={this.divs.wrapper2} offset={offset}>
        //                 <Wrapper3 ref={this.divs.wrapper3} offset={offset}>
        //                     {this.props.children}
        //                 </Wrapper3>
        //             </Wrapper2>
        //         </Wrapper1>
        //     </Root>
        // );
    }
}

StickyColumn.propTypes = {
    offset: PropTypes.any.isRequired
};

StickyColumn.defaultProps = {
    offset: 0
};

export default StickyColumn;
