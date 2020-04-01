<template>
  <div>
    <h1 class="section-index">Skill</h1>
    <p id="skill-list" class="msg">{{ msg }}</p>
      <ul  class="inline-block">
        <strong>language</strong>
        <li v-for="language in languages" :key="language.id">
          {{ language.description }}
        </li>
      </ul>
      <ul id="language-list" class="inline-block">
        <strong>DB</strong>
        <li v-for="database in databases" :key="database.id">
          {{ database.description }}
        </li>
      </ul>
      <ul id="library-list" class="inline-block">
        <strong>FW or library</strong>
        <li v-for="library in libraries" :key="library.id">
          {{ library.description }}
        </li>
      </ul>
      <ul id="other-list" class="inline-block">
        <strong>other</strong>
        <li v-for="other in others" :key="other.id">
          {{ other.description }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '※は実務未経験',
      languages: [
        {id: 1, description: 'JavaScript'},
        {id: 2, description: 'Java'},
        {id: 3, description: 'PHP'},
        {id: 4, description: 'HTML5'},
        {id: 5, description: 'CSS3'},
        {id: 6, description: 'VB.net'},
        {id: 7, description: 'VBA'},
        {id: 8, description: 'Ruby(※)'}
      ],
      databases: [
        {id: 1, description: 'PostgreSQL'},
        {id: 2, description: 'MySQL'},
        {id: 3, description: 'Access'},
        {id: 4, description: 'SQL Server(※)'}
      ],
      libraries: [
        {id: 1, description: 'JQuery'},
        {id: 2, description: 'Express'},
        {id: 3, description: 'Spring'},
        {id: 4, description: 'Bootstrap'},
        {id: 5, description: 'Vue.js(※)'},
        {id: 6, description: 'Struts(※)'},
        {id: 7, description: 'Ruby on Rails(※)'}
      ],
      others: [
        {id: 1, description: 'Sass(SCSS)'},
        {id: 2, description: 'gulp'},
        {id: 3, description: 'docker'},
        {id: 4, description: 'npm'},
        {id: 5, description: 'Webpack'},
        {id: 6, description: 'JSP'},
        {id: 7, description: 'Junit'},
        {id: 8, description: 'Illustrator'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/SkillPage.scss";
</style>
