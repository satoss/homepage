<template>
  <div>
    <h1 class="section-index">About</h1>
    <p class="msg">{{ msg }}</p>
    <div id="table-block">
      <table class="table">
        <tr v-for="profile in profiles" v-bind:key="profile.id">
          <th class="caption">{{ profile.title }}</th>
          <td class="text">{{ profile.description }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
const myBirthDay = {
  year: 1993,
  month: 7,
  day: 28
}

var getAge = function () {
  var today = new Date()

  today = today.getFullYear() * 10000 +
          (today.getMonth() + 1) * 100 +
          today.getDate()

  var birthday = parseInt(myBirthDay.year, 10) * 10000 +
                 parseInt(myBirthDay.month, 10) * 100 +
                 parseInt(myBirthDay.day, 10)

  return Math.floor((today - birthday) / 10000)
}

export default {
  data () {
    return {
      msg: 'プロフィール',
      profiles: [
        {id: 1, title: '生年月日', description: myBirthDay.year + '年' + myBirthDay.month + '月' + myBirthDay.day + '日'},
        {id: 2, title: '年齢', description: getAge() + '歳'},
        {id: 3, title: '住所', description: '東京都中野区'},
        {id: 4, title: '出身地', description: '秋田県潟上市'},
        {id: 5, title: '血液型', description: 'O型'},
        {id: 6, title: '好きなこと', description: 'おいしいご飯を食べること'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/AboutPage.scss";
</style>
