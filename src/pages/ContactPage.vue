<template>
  <div>
    <h1 class="section-index">Contact</h1>
    <form id="inquiry" @submit="checkForm" method="post" class="form-horizontal" novalidate="true">
      <fieldset>
        <legend>お問い合わせ</legend>
        <div v-if="!isSubmit">
          <p v-if="errors.length">
            <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
            </ul>
          </p>
          <div class="form-group">
            <label class="col-sm-3 control-label" for="name1">お名前</label>
            <div class="col-sm-6">
              <input id="name" name="name" type="text" class="form-control" v-model="name">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label" for="email">メールアドレス</label>
            <div class="col-sm-6">
              <input id="email" name="email" v-model="email"  type="email" class="form-control"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-3 control-label" for="ask1">お問い合わせ内容</label>
            <div class="col-sm-6">
              <textarea id="content" name="content" rows="7" type="text" class="form-control"></textarea>
            </div>
          </div>
          <div class="form-group">
              <button type="submit" class="btn btn-primary center-block">送信</button>
          </div>
        </div>
        <div v-if="isSubmit">
          <h4>お問い合わせ 送信完了</h4>
          <p>
          お問い合わせありがとうございました。<br>
          内容を確認のうえ、回答させて頂きます。<br>
          しばらくお待ちください。
          </p>
          <br>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      errors: [],
      name: null,
      email: null,
      isSubmit: false
    }
  },
  methods: {
    checkForm: function (e) {
      this.errors = []

      if (!this.name) {
        this.errors.push('名前が入力されていません。')
      }

      if (!this.email) {
        this.errors.push('メールアドレスが入力されていません。')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('入力されたメールアドレスが不正です。')
      }
      if (!this.errors.length) {
        this.isSubmit = true
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      var regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    }
  }
}
</script>
<style scoped>
  div.form-group > .control-label.col-md-2 {
    white-space: nowrap;
    padding: 0 10px;
  }

  li {
    display: block;
    color: red;
  }
  button{
    width: 70px;
  }

</style>
