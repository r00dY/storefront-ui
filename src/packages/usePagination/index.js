import { useState } from "react";

const defaultOptions = {
  current: 1,
  splitter: [1, 1, 1],
  onChange: () => {}
};

export function usePagination(options) {
  const { current, splitter, onChange, count, href } = Object.assign(
    {},
    defaultOptions,
    options
  );

  const nextPage = Math.min(current + 1, count);
  const prevPage = Math.max(current - 1, 1);

  const goToNext = () => {
    onChange(nextPage);
  };
  const goToPrev = () => {
    onChange(prevPage);
  };

  const goTo = index => {
    if (index < 1 || index > count) {
      throw new Error(
        `[usePagination] wrong attribute for goTo, must be between 1 to ${count} (was ${index})`
      );
    }

    onChange(index);
  };

  const pageArray = Array.from(Array(count).keys()).map(x => x + 1);

  // button groups
  let pageButtonGroups = [];
  let parts = [];

  if (count <= splitter[0] + splitter[1] * 2 + 1 + splitter[2]) {
    pageButtonGroups.push(pageArray);
  } else {
    if (current <= splitter[0] + splitter[1] + 1) {
      pageButtonGroups.push(pageArray.slice(0, current + splitter[1]));
      pageButtonGroups.push(pageArray.slice(-splitter[2]));
    } else if (current >= count - (splitter[2] + splitter[1])) {
      pageButtonGroups.push(pageArray.slice(0, splitter[0]));
      pageButtonGroups.push(pageArray.slice(current - 1 - splitter[1], count));
    } else {
      pageButtonGroups.push(pageArray.slice(0, splitter[0]));
      pageButtonGroups.push(
        pageArray.slice(
          current - 1 - splitter[1],
          current - 1 + splitter[1] + 1
        )
      );
      pageButtonGroups.push(pageArray.slice(-splitter[2]));
    }
  }

  pageButtonGroups.forEach((group, index) => {
    if (index > 0) {
      parts.push({
        type: "separator"
      });
    }

    parts.push({
      type: "buttons",
      buttons: group.map(page => ({
        page: page,
        props: {
          onClick: () => goTo(page),
          href: href ? href(page) : undefined
        }
      }))
    });
  });

  const vals = {
    current: current,
    count: count,
    prevButtonActive: current > 1,
    nextButtonActive: current < count,
    nextButtonProps: {
      onClick: goToNext,
      href: href ? href(nextPage) : undefined
    },
    prevButtonProps: {
      onClick: goToPrev,
      href: href ? href(prevPage) : undefined
    },
    goToNext: goToNext,
    goToPrevious: goToPrev,
    goTo: goTo,
    selectProps: {
      options: pageArray.map(x => x.toString()),
      value: current.toString(),
      onChange: val => {
        goTo(parseInt(val));
      }
    },
    parts
  };

  return vals;
}
