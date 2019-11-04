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
        {id: 3, description: 'HTML5'},
        {id: 4, description: 'CSS3'},
        {id: 5, description: 'VB.net'},
        {id: 6, description: 'VBA'},
        {id: 7, description: 'Ruby(※)'}
      ],
      databases: [
        {id: 1, description: 'PostgreSQL'},
        {id: 2, description: 'Access'},
        {id: 3, description: 'SQL Server(※)'}
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
        {id: 1, description: 'Linux'},
        {id: 2, description: 'JIRA'},
        {id: 3, description: 'Confluence'},
        {id: 4, description: 'bitbucket'},
        {id: 5, description: 'npm'},
        {id: 6, description: 'Webpack'},
        {id: 7, description: 'JSP'},
        {id: 8, description: 'Junit'},
        {id: 9, description: 'Tomcat'},
        {id: 10, description: 'Illustrator'}
      ]
    }
  }
}
</script>

<style scoped>
li {
  display: list-item;
  margin-bottom: 10px;
}
strong {
  font-size: 20px;
}
.inline-block {
  display: inline-block;
  margin: 30px;
  vertical-align: top;
}
</style>
