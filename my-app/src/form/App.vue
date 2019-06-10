<template>
  <div id="app">
	<div class="container">
	  一言：「{{ message }}」
	  <table class="table table-bordered">
		<tr>
		  <th>
			名前
		  </th>
		  <td><input type="text" name="name" v-model="form.name" class="form-control">
			{{form.name.length}}/20文字
			<div v-if="error.name" class="error">お名前を入力してください</div>
		  </td>
		</tr>
		<tr>
		  <th>
			E-mail
		  </th>
		  <td>
			<input type="email" name="mail" v-model="form.mail" class="form-control">
			<div v-if="error.mail" class="error">E-mailを入力してください</div>
		  </td>
		</tr>
		<tr>
		  <th>利用規約</th>
		  <td>
			<div class="form-check">
			  <label class="form-check-label"><input type="checkbox" name="agree" value="同意します" v-model="form.agree" class="form-check-input">同意しますか？</label>
			</div>
			<div v-if="error.agree" class="error">同意してください</div>
		  </td>
		</tr>
		<tr>
		  <th>プラン</th>
		  <td>
			<div class="form-check">
			  <label class="form-check-label"><input type="checkbox" value="A" v-model="form.choice" class="form-check-input">A</label><br>
			  <label class="form-check-label"><input type="checkbox" value="B" v-model="form.choice" class="form-check-input">B</label><br>
			  <label class="form-check-label"><input type="checkbox" value="C" v-model="form.choice" class="form-check-input">C</label>
			</div>
			<div v-if="error.choice" class="error">選択してください</div>
		  </td>
		</tr>

		<tr>
		  <th>性別</th>
		  <td>
			<div class="form-check">
			  <label class="form-check-label"><input type="radio" name="sex" value="男性" v-model="form.sex" class="form-check-input">男性</label><br>
			  <label class="form-check-label"><input type="radio" name="sex" value="女性" v-model="form.sex" class="form-check-input">女性</label>
			</div>
			<div v-if="error.sex" class="error">選択してください</div>
		  </td>
		</tr>

	  </table>
	  <p class="text-center">
		<button type="submit" @click="submit" class="btn btn-primary">送信</button>
	  </p>
	</div>
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
                if (this.form.name.length === 0) {
                    this.error.name = true
                    e.preventDefault()
                } else {
                    this.error.name = false
                }
                if (this.form.mail.length === 0) {
                    this.error.mail = true
                    e.preventDefault()
                } else {
                    this.error.mail = false
                }
                if (this.form.choice.length === 0) {
                    this.error.choice = true
                    e.preventDefault()
                } else {
                    this.error.choice = false
                }
                if (this.form.agree.length === 0) {
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
	color: #2c3e50;
	margin-top: 60px;
  }

  .error {
	color: red;
  }
</style>
