<template>
  <div
    v-if="isArea"
    class="team-cards-item team-cards-item--area"
    :class="{ 'px-2 mb-3 col-sm-6 col-lg-4': !noRow }"
    :style="color ? { '--team-cards-item-color': color } : null"
  >
    <div class="team-cards-item__card">
      <div class="team-cards-item__media">
        <v-img v-if="img" :src="img" :alt="alt" class="team-cards-item__img" />
        <span v-if="area" class="team-cards-item__area">{{ area }}</span>
      </div>
      <div class="team-cards-item__content">
        <headline level="h3" class="team-cards-item__name light thin" :text="name" />
        <div v-if="job" class="team-cards-item__job">{{ job }}</div>
        <p v-if="description" class="team-cards-item__text">{{ description }}</p>
        <div v-if="cta" class="team-cards-item__cta">
          <cta v-bind="cta" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="team-cards-item px-2 mb-3" :class="{ 'team-cards-item--default col-sm-6 col-lg-4': !noRow }">
    <div class="card h-100 has-card-background overflow-hidden" :class="{ 'no-border': noBorder }">
      <v-img v-if="img" :src="img" :alt="alt" class="img-fluid" :class="noBorder ? '' : 'pt-4 px-4'" />
      <div class="team-cards-item__body card-body">
        <headline level="h3" class="light thin mb-1" :text="name" />
        <headline level="h5" class="thin" :text="job" />
        <p class="team-cards-item__description mt-3">{{ description }}</p>
        <br />
        <div style="display: flex; gap: 1rem" v-if="skills">
          <icon icon="ribbon" size="medium" />
          <div>{{ skills }}</div>
        </div>
      </div>
      <div class="card-footer">
        <ul class="list-inline mb-0">
          <li v-if="twitter" class="list-inline-item">
            <a :href="twitter">
              <i class="fab fa-x-twitter" style="font-size: 1.5rem"></i>
            </a>
          </li>
          <li v-if="linkedin" class="list-inline-item">
            <a :href="linkedin">
              <i class="fab fa-linkedin" style="font-size: 1.5rem"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-cards-item',
  computed: {
    isArea() {
      return this.variant === 'area';
    },
  },
  props: {
    img: String,
    alt: String,
    name: String,
    job: String,
    description: String,
    skills: String,
    twitter: String,
    linkedin: String,
    noRow: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String,
      default: null,
    },
    area: String,
    color: String,
    cta: Object,
  },
};
</script>
<style>
.team-cards-item--default {
  max-width: 300px;
}

.card.no-border {
  border-radius: 0;
}
.card.no-border .card-footer:last-child {
  border-radius: 0;
}

.team-cards-item__description {
  flex-grow: 1;
}

.team-cards-item__body {
  display: flex;
  flex-direction: column;
}

.team-cards-item--area {
  --team-cards-item-color: var(--color-primary);
}
.team-cards-item--area .team-cards-item__card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--color-gk-white);
}
.team-cards-item--area .team-cards-item__media {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: var(--team-cards-item-color);
}
.team-cards-item--area .team-cards-item__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.team-cards-item--area .team-cards-item__area {
  position: absolute;
  top: 0.9375rem;
  left: 0;
  padding: 0.28125rem 0.5625rem;
  background-color: rgba(255, 255, 255, 0.82);
  color: var(--color-gk-dark-blue);
  font-size: 0.703125rem;
  line-height: 1.3;
}
.team-cards-item--area .team-cards-item__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem 1.125rem 1.3125rem;
}
.team-cards-item--area .team-cards-item__name {
  margin-bottom: 0.1875rem;
  font-size: 1.875rem;
  line-height: 1.2;
}
.team-cards-item--area .team-cards-item__job,
.team-cards-item--area .team-cards-item__text {
  font-size: 0.75rem;
  line-height: 1.6;
}
.team-cards-item--area .team-cards-item__job {
  font-weight: 700;
}
.team-cards-item--area .team-cards-item__text {
  margin: 1.125rem 0 0;
}
.team-cards-item--area .team-cards-item__cta {
  margin-top: auto;
  padding-top: 1.875rem;
}
</style>
