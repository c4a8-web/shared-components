<template>
  <li :class="headerItemClasses(item)" v-for="(item, index) in navigation" :key="index">
    <a
      :class="headerLinkClasses(item, index)"
      :href="getHref(item)"
      :target="getTarget(item)"
      v-on:click="handleClick(item, index)"
      v-if="item?.languages"
      ref="link"
    >
      <div class="header__link-content" v-on:mouseover="handleMouseOver(item, index, $event)">
        <span class="header__link-text">{{ item.languages[lowerLang]?.title }}</span>
        <span class="header__link-text-spacer">{{ item.languages[lowerLang]?.title }}</span>
        <icon class="header__link-icon" icon="expand" size="small" v-if="item.children" />
      </div>
    </a>

    <template v-for="(list, listIndex) in item.children">
      <link-list
        :key="listIndex"
        :list="list"
        :lang="lowerLang"
        :hidden="isLinkListHidden(item, index)"
        classes="header__link-list"
        :no-animation="true"
        v-if="list && item.children && !list.products"
      />
      <div :class="headerProductListClasses(item, index)" ref="product-list" v-else :key="`product-list-${listIndex}`">
        <a
          :href="subChild?.languages[lowerLang]?.url"
          :target="subChild.target"
          class="header__product-list-item custom"
          v-for="(subChild, subChildIndex) in list.children"
          :key="subChildIndex"
        >
          <v-img :img="subChild.img" class="header__product-list-image" :cloudinary="true" />
          <div class="header__product-list-data">
            <div class="header__product-list-title font-size-8 bold">
              {{ subChild?.languages[lowerLang]?.title }}
            </div>
            <div class="header__product-list-subtitle">{{ subChild?.languages[lowerLang]?.subtitle }}</div>
          </div>
        </a>
      </div>
    </template>

    <a
      :href="item.languages[lowerLang]?.emergency.href"
      :class="navHighlightClasses(item, index)"
      v-if="item.languages && item.languages[lowerLang]?.emergency"
    >
      <icon :icon="item.languages[lowerLang]?.emergency.icon" size="medium" />
      {{ item.languages[lowerLang]?.emergency.text }}
    </a>
  </li>
</template>
<script>
import State from '../utils/state.js';

export default {
  tagName: 'v-header-item',
  computed: {
    navigation() {
      if (this.lowerLang && this.activeNavigation) return this.activeNavigation;
    },
  },
  methods: {
    headerItemClasses(item) {
      return [
        'header__item',
        item.languages && item.languages[this.lowerLang]?.active ? State.ACTIVE : '',
        item.isMobile ? 'is--mobile' : '',
        item.skin,
      ];
    },
    headerLinkClasses(item, index) {
      return this.getListClasses(item, index, ['header__link custom']);
    },
    getListClasses(item, index, classes) {
      const isLinkListHidden = this.isLinkListHidden(item, index);

      return [...classes, isLinkListHidden ? '' : State.EXPANDED];
    },
    isLinkListHidden(item, index) {
      const id = this.getId(item, index);

      return !this.linkLists[id] ? true : false;
    },
    navHighlightClasses(item, index) {
      const isHidden = this.isLinkListHidden(item, index);

      return ['header__nav-highlight custom', isHidden ? 'is-hidden' : ''];
    },
    headerProductListClasses(item, index) {
      return this.getListClasses(item, index, ['header__product-list', this.inTransition ? State.IN_TRANSITION : '']);
    },
  },
  props: {
    lowerLang: String,
    activeNavigation: Object,
    handleMouseOver: Function,
    handleClick: Function,
    getHref: Function,
    getTarget: Function,
    linkLists: Object,
    getId: Function,
    inTransition: Boolean,
  },
};
</script>
