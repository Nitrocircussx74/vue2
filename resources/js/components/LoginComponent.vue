<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Login</div>

              <div class="card-body">
                  <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Username:</label>
                            <input type="text" class="form-control" v-model="user.username">
                        </div>
                    </div>
                </div>
                  <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Password:</label>
                            <input type="password" class="form-control" v-model="user.password">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                        <button class="btn btn-primary">Login</button>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
            data(){
        return {
          user:{}
        }
            }, 
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
