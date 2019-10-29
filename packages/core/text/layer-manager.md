# Dropdowns, modals, popups aka layer manager
One thing we've noticed during development of design systems in front-end is how hard it is to create nice architecture for dropdowns, modals and all other forms of popups. In this guideline we'll try to solve the problems occuring in this particular area.

## What can pop up?

There are two categories of things that can popup, the ones that are not bound with its trigger (modals) and the ones that are (popups).

### Modals

Popups that are *not* bound with the trigger:
1. Modal. Basically, a window that covers the viewport (partly or totally).
2. Panels. All kinds of elements in UI that slides from left/top/bottom/right side of the screen to cover it wholly or partly.
3. Dialogs. For example, confirmation dialog (are you sure you want to delete this item?) etc.

When you look closer all of them are actually the same thing - modals. Dialogs are smaller, side panel are not centered but the nature is the same. Their place is fixed to the viewport no matter what kind of element triggered them.

For the purpose of this guideline, we'll call them all modals.

### Popups

Popups *are* bound to its trigger. It means that their place is always in the context of the component that triggered them. Examples:

1. Dropdown menu. It is always below (or above, or next to) the button that opened it.
2. Selectbox or Multiselect box. The options to select are always below (or above, or next to) the button or input that triggered them. [image]
3. Date field. It always has calendar component popping up nearby. [image]
4. Spotlight. This is actually a popup too with additional darkening of everything except for trigger component. However, description is always nearby the component. [image]
5. Confirmation popup. Very often you don't want to show centered modal to ask user "do you want to delete this item?". You could easily ask this question in popup below the "Delete" button. [image]
6. Tooltip. Helpful info about component on hover (or question mark click)

Actually, sky is the limit. Except for obvious things like above mentioned you can imagine any kind of small window that pops up nearby the element that is logically connected to it.

## Scrolling context

For the purpos of this guidline, we'd like to introduce a new term: a scrolling context.

Scrolling context is currently active scrollable container for content. Initially it's your window browser. You have some content in the window and you can scroll it, simple. However, when you open a modal, window scroll should be blocked, and modal becomes "the active container". It has its own scroll and its own content (no matter if it takes entire screen or not). This means that modal is a scrolling context too. When you show open 3 modals one after another (A, B and C), every one of them is a scrolling context but only C is active.

In standard UI there can be *only one* active scrolling context. Let's make this a rule for the purpose of this guideline. Can imagine exceptions but extremely rare and unlikely.

To sum up: modals and window are scrolling contexts. There can be only one active which means that scrolling nonactive ones is disabled.

EDIT:

Actually, new modal doesn't have to have scrollbar per se (small dialogs often don't). But still showing modal should disable scrolling of body or modals below. This means that maybe "scrolling context" is a bad word. Maybe we should call it simply "new layer"? And this new layer might have scrollable container in the form of `<ScrollableContainer></ScrollableContainer>` and this container has a lot of power in deciding of how to show popups inside it.

## Common behaviours

Here, we're gonna show common behaviours and patterns for modals and popups which simply makes them user friendly.

## Modals

It's nice when modal visually deemphasizes the part of the screen that's below. It helps user focus on currently "active" part of view - the modal. However, it doesnt' have to be always the case (confirmation dialog) so talk to your designer.

[image]

CLOSING

It should be easy to close the modal unless it's your purpose to make it not. Always visible "X" button or "Cancel" button is nice. Also, it's a great pattern to close modal when you click on the space outside of modal.

STACKING

It should be possible that modal opens another modal. Not taking this into account heavily limits the capabilities of design language systems. Let's say you have "Delete" button in a modal and you can't show Confirmation Dialog because there is already a modal opened. Shame.

SCROLLING

Scrolling should be possible only for the topmost modal. It shouldn't be allowed to scroll modals that are not active or main scren when another modal is active.

PLACE

Modal place is fixed to the viewport, it's constant.

## Popups

CLOSING

Clicking outside of popup should close popup.

Important thing to remember is that clicking outside should be "normal click" and additionally it should close popup. By "normal click", I mean that it should trigger same action that it would if popup wasn't opened. Like clicking the link should move us to another site and close popup at the same time. We've seen mutliple times systems where clicking outside of popup does hide popup but doesn't trigger standard action. Only the second click does trigger the action like "go to link".

(implementation note) we must listen to click event on body in a capture phase I guess (to prevent library from missing the event in case of user calling stopPropagation in some of his components).

STACKING

We don't see a reason we can't show popup from a popup. Imagine you open a small popup with form which has multiselect inside. Multiselect should is a popup too right? Don't think it's superior UX and we definitely shouldn't stack too many popups in our apps. However, front-end implementation definitely *shouldn't* block such behaviors.

SCROLLING

This one is tricky.

Should parent scroll be disabled when popup opens?

Probably not, what's the point? Why would I hide little popup with options (select box) as I scroll down.

Should popup be scrollable?

Definitely can be. Long list of options in select box is perfect example.

Should popup close when its parent (modal or window) scrolls?

Well, again, what's the point? If there's a popup with options in the screen opened, why would we hide it if we scroll down. Does scrolling indicates we want to close the popup?

Can there be multiple popups opened at the same time (not talking abut stacked onto each other)?

I guess not? Anyway, when we hit a button and open popup A and then hit another button to open popup B, hitting on this button should be treated as "click outside" for button B, so it will close anyway. It's good UX imo.

PLACE

Popups are *always* shown in the context of some other element and they always float above it (have it's own layer with bigger z-index). Popup can't exist without its tigger. We always need to be able to extract position of the trigger and show popup next to the trigger. There are many things that can be variable and flexible here like popup default position nearby the trigger (top, bottom, left, right), spacing between popup and trigger etc. 

Popup should *always* fit in the viewport. This requires implementing some algorithm that checks popup boundaries if they fit in the viewport. If they do not, algorithm should replace popup so that its content is still visible.

**important!**

Important thing to consider is what happens when popup is triggered by element inside a `ScrollableContainer` (in some modal). Should we try to keep in inside `ScrollableContainer` boundaries or should we allow to show it so that popup content spans beyond `ScrollableContainer` edges. I think the latter is superior. And it's important from implementation point of view - how do we make popup "follow" trigger as user is scrolling the `ScrollableContainer`? In this case we can't put popup as `absolute` inside the `ScrollableContainer` as the `overflow` effect is in play (and cuts off popup). It means that popup inside scrollable container (or anything with `overflow:` `hidden`/`scroll`) should be in a layer *above*. And as scrollable container is being scrolled, some script should update popup position.

(note: Atlassian hides popup shown in modal as soon as user starts scrolling -> that's their solution).

I think that actually this paragraph is crutial and fundamental to entire implementation. Maybe we should have a generic solution when popups and modals are actually the same thing? Sth that is shown as fixed item in portal in the new layer? And the only difference is that showing modal blocks scroll of modals below (and window). But actually popup could optionally allow for this too (spotlight). This architecture is tempting because model seems easy and unified. The only disadvantage (big one) is the fact that updating popup that is positioned as "fixed" (not bound to scrollable container in any way) while scrolling the window is vulnerable to janks and can make scrolling performance worse (`onscroll` is not called on every frame), even with use of `transform`.

Maybe we should have a generic system + the simple "absolutely positioned" popup system which doesn't have problems with updating position? At the end of the day, 90% of popups will be in window context (not modal context) so overflow problem doesn't exist. And this mode would be default. And we could turn on "fixed" mode by some flag.
 
## Implementation

Layers, layers, layers.

I think we can have 3 ways of positioning popups modals:

##### 1. `position: absolute` in one container with trigger.

Sth like this:

```html
<div>
    <button>Click me</button>
    <div class="popup" style="position: absolute; etc...">popup content</div>
</div>
```

Pros:
1. popup is scrolling nicely with button without any hacks
2. markup of popup in context of trigger, semantically correct. Potentially (?) more SEO friendly. 

Cons:
1. potential `z-index` mess
2. popup can't stick beyond `overflow: hidden/scroll` container
3. Harder to implement popup-on-desktop/modal-on-mobile use case.

##### 2. `position: absolute` in new layer

Sth like this:

```html
<div class="layer">
    <div class="page-content">
        <button>Click me</button>
        <p>Lorem ipsum...</p>
    </div>
    <div class="popup-layer" style="position: absolute; top: 0; left: 0;">
        <div class="popup" style="position: absolute; etc...">popup content</div>
    </div>
</div>
```

Pros:
1. popup is scrolling nicely with button without any hacks
2. `z-index` mess solved.

Cons:
1. popup can't stick beyond `overflow: hidden/scroll` container
2. markup of popup separate, potential semantic and SEO problems 


##### 3. `position: absolute` in new layer

Sth like this:

```html
<div class="layer">
    <div class="page-content">
        <button>Click me</button>
        <p>Lorem ipsum...</p>
    </div>
    <div class="popup-layer" style="position: absolute; top: 0; left: 0;">
        <div class="popup" style="position: absolute; etc...">popup content</div>
    </div>
</div>
```

Pros:
1. popup can be literally anywhere, no `overflow: hidden/scroll` container problem
2. `z-index` mess solved.

Cons:
1. Scrolling of popup hard.
2. markup of popup separate, potential semantic and SEO problems 


#### Summary

I think that 1. is definitely better than 2. I'd go with 1. as default (for most cases should be enough) and 3. as option. Anyway, developer experience won't be "ultimate", developers must be aware of differences and limitations and know when to use which option.


## Important things to remember about

### SEO and rendering with `display: none`

I think it is a pretty big topic.

First, sometimes popup content might have links which should be indexed by google. This means that popup content should be "React-rendered" but `display: none`.

Same with modals? It might occur that sometimes we need this too.

##### componentDidMount problem

If there are components that are `display: none` by default and then showing them, there should be a new event available. What if component wants to do sth when it knows its size? If it's `display: none` its size is 0/0 and `componentDidMount` was already called. Overlay system should take care of calling some special event for components to tell them they were *laid out* (not react rendered, but really have layout, size etc).
    
### `100vh`

`100vh` and `100vw` is nice for window viewport, but not for modals. I think that when someone creates a modal or new `ScrollableContainer` or sth, there should be some context available so that I can calculate stuff based on modal width / height, etc.

Not crucial but definitely sth to consider.

### popup changing into modal on mobile

It's a common pattern -> popup (bound to trigger) on desktop / tablet and modal on mobile. Good system **must** allow to do this use case easily. 




