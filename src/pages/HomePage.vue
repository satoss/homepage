<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <h1>{{ title }}</h1>
        <p>{{ msg }}</p>
      </div>
      <div class="container">
        <div class="items">
          <a
            v-for="section in sections"
            v-bind:key="section.id"
            href="#"
            @click="changePageType(section.id)"
          >
            <p class="caption">{{ section.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <about-page v-if="pageType === 1" id="about" class="section"></about-page>
    <history-page v-else-if="pageType === 2" id="work" class="section"></history-page>
    <skill-page v-else-if="pageType === 3" id="skill" class="section"></skill-page>
    <contact-page v-else id="contact" class="section"></contact-page>
  </div>
</template>

<script>
import AboutPage from '@/pages/AboutPage'
import HistoryPage from '@/pages/HistoryPage'
import SkillPage from '@/pages/SkillPage'
import ContactPage from '@/pages/ContactPage'

export default {
  components: {
    'about-page': AboutPage,
    'history-page': HistoryPage,
    'skill-page': SkillPage,
    'contact-page': ContactPage
  },
  data () {
    return {
      title: 'Shoei Sato',
      msg: 'Thank you for Coming',
      pageType: 1,
      sections: [
        { id: 1, title: 'About', link: 'about', icon: 'fas fa-user' },
        { id: 2, title: 'History', link: 'work', icon: 'fas fa-images' },
        { id: 3, title: 'Skill', link: 'skill', icon: 'fas fa-list-ul' },
        { id: 4, title: 'Contact', link: 'contact', icon: 'far fa-envelope' }
      ]
    }
  },
  methods: {
    changePageType: function (id) {
      this.pageType = id
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/HomePage.scss";
</style>
