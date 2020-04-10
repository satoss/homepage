<template>
  <!-- <div>
    <h1 class='section-index'>History</h1>
    <br>
      <ul>
        <li v-for='history in histories' :key='history.id'>
          <div id='history-block'>
            <p id='title'>
              {{ history.title }}
              <span class='margin-side'>{{ history.term }}</span>
            </p>
            <p>{{ history.comment }}</p>
          </div>
        </li>
      </ul>
  </div> -->
  <div>
    <h1 class='section-index'>History</h1>
    <br>
      <ul class="timeline">
        <li v-for='history in histories' :key='history.id'>
          <p class="timeline-date">{{ history.term }}</p>
          <div class="timeline-content">
            <h3>{{ history.title }}</h3>
            <p>{{ history.comment }}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      histories: [
        {
          id: 1,
          term: '2020年1月～',
          title: '■自社メディア開発',
          comment: '自社で運営するメディアの開発・改修を担当'
        },
        {
          id: 2,
          term: '2018年5月～2019年12月',
          title: '■webフロントエンド開発',
          comment: 'ポータルサイトに広告を配信するためのフロントエンド開発・改修を担当'
        },
        {
          id: 3,
          term: '2017年3月～2018年3月',
          title: '■電話帳配達管理システム開発',
          comment: 'Javaを使用し、既存システムのリプレースに携わる'
        },
        {
          id: 4,
          term: '2016年7月～2017年2月',
          title: '■帳票作成支援',
          comment: '官公庁で発行する帳票作成業務を自動化するシステム開発を担当'
        },
        {
          id: 5,
          term: '2016年4月～2016年6月',
          title: '■在庫管理システム開発（社内研修）',
          comment: '一般的なシステム開発の基礎を学ぶ'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/HistoryPage.scss";
</style>
