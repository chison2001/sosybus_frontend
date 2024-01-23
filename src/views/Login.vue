

<template>
    <div class="bg-image" style="background-image: url(https://res.cloudinary.com/dwbnrx0mg/image/upload/v1705895258/doan/a_01-1920x1080-1a7d0f916f14ccb238fe9fd0862894ee_npwmhe.jpg); height: 100vh">

            <section class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-6">
                    <div class="card rounded-3 text-black">
                    <div class="row g-0">
                        <div class="col-lg">
                            
                        <div class="card-body p-md-5 mx-md-4">
                            <div class="text-center">
                                    <img src="https://res.cloudinary.com/dwbnrx0mg/image/upload/c_thumb,w_200,g_face/v1705993978/doan/3752bcc334a1ba2613c6d389318f503b_xau5p1.jpg" alt="">
                                    <h4 class="mt-1 mb-5 pb-1">Chào mừng đến với BusGoo</h4>
                            </div>
                        
                            <Form >
                                <div
                                    v-for="{ as, name, label, ...attrs } in formSchema.fields"
                                    :key="name"
                                  
                                >
                                <label class="form-label" :for="name">{{ label }}</label>
                                <Field class="form-control" :as="as" :id="name" :name="name" v-bind="attrs" />
                                <ErrorMessage class="text-danger"  :name="name" />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button class="btn  btn-warning px-5 my-3 ">
                                        <span class="text-white">Đăng nhập</span>
                                    </button>
                                </div>
                            </Form>
                            <span>Bạn chưa có tài khoản?</span><span class="text-regis fw-bold" @click="forwardRegister"> Đăng kí</span>
                            
                        </div>
                            

                        
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </section>
    </div>
    
</template>

<script lang="ts">


import { defineComponent} from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup'
export default defineComponent({
    components: { 
        Form,
        Field,
        ErrorMessage
    },
    data: () => {
    const formSchema = {
      fields: [
        {
          label: 'Email',
          name: 'email',
          as: 'input',
          rules: Yup.string().email("Sai định dạng email.").required("Không được để trống."),
        },
        {
          label: 'Mật khẩu ',
          name: 'password',
          as: 'input',
          type: 'password',
          rules: Yup.string().min(6, "Tối thiểu 6 kí tự.").required("Không được để trống."),
        },
      ],
    };
    return {
      formSchema,
    };
  },
    methods: {
        forwardRegister(){
            this.$router.push("/register");
        }
    }
})
</script>
<style scoped>
    .text-gray{
    /* fallback for old browsers */
    text-align: center;
    color: #9b9b9b;
    }
    .text-regis{
    color: #ff0000;

    }


    @media (min-width: 768px) {
    .gradient-form {
    height: 100vh !important;
    }
    }
    @media (min-width: 769px) {
    .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    }
}
</style>

