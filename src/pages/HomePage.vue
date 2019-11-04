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
      msg: 'Thanks for Coming',
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

<style scoped>
h1 {
  font-weight: normal;
  font-size: 60px;
  margin-bottom: 10px;
}
.top-wrapper {
  padding: 10px 0 5px 0;
  background-image: url(~@/assets/Starry_Sky.jpg);
  background-size: cover;
  color: white;
  border-bottom: 2px solid #dee7ec;
}
.top-wrapper h1 {
  opacity: 0.8;
  font-size: 45px;
  letter-spacing: 3px;
}
.top-wrapper p {
  opacity: 0.8;
}
.items {
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
}
.item {
  width: 15%;
  margin: 10px;
  border: 1px solid #dee7ec;
  background-color: rgba(0, 0, 0, 0.3);
}
.item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.section {
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  border: solid #b0c4de 0px;
}
.section::after {
  content: "";
  display: block;
  clear: both;
}
</style>
