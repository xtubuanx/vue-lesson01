<template>
  <div id="app">
    <div>
      名前 <input type="text" name="name" v-model="form.name">
      <div v-if="error.name" class="error">お名前を入力してください</div>
    </div>
    <div>
      E-mail <input type="email" name="mail" v-model="form.mail">
      <div v-if="error.mail" class="error">E-mailを入力してください</div>
    </div>
    <p>{{form.name.length}}/20</p>

    <div>
      <label><input type="checkbox" name="agree" value="同意します" v-model="form.agree">同意しますか？</label>
      <div v-if="error.agree" class="error">同意してください</div>
    </div>
    <div>
      <label><input type="checkbox" value="A" v-model="form.choice">A</label>
      <label><input type="checkbox" value="B" v-model="form.choice">B</label>
      <label><input type="checkbox" value="C" v-model="form.choice">C</label>
      <div v-if="error.choice" class="error">選択してください</div>
    </div>

    <div>
      <label><input type="radio" name="sex" value="男性" v-model="form.sex">男性</label>
      <label><input type="radio" name="sex" value="女性" v-model="form.sex">女性</label>
      <div v-if="error.sex" class="error">選択してください</div>
    </div>

    <p><button type="submit" @click="submit">送信</button></p>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
    data() {
        return {
            form: {
                name: "",
                mail: "",
                agree: "",
                choice: [],
                sex: null,
            },
            error: {
                name: false,
                mail: false,
                agree: false,
                choice: false,
                sex: false
            },
            message: 'Hello World',
        }
    },
    methods: {
        //jQueryでいうon的なもの
        submit(e) {
            if (this.form.name.length == 0) {
                this.error.name = true
                e.preventDefault()
            } else {
                this.error.name = false
            }
            if (this.form.mail.length == 0) {
                this.error.mail = true
                e.preventDefault()
            } else {
                this.error.mail = false
            }
            if (this.form.choice.length == 0) {
                this.error.choice = true
                e.preventDefault()
            } else {
                this.error.choice = false
            }
            if (this.form.agree.length == 0) {
                this.error.agree = true
                e.preventDefault()
            } else {
                this.error.agree = false
            }
            if (this.form.sex == null) {
                this.error.sex = true
                e.preventDefault()
            } else {
                this.error.sex = false
            }
            //console.log(this.form)
            //thisなんちゃら
            //alert(this.form)
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .error {
    color: red;
  }
</style>
