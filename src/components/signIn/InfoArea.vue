<script lang="ts">
import { defineComponent } from 'vue'
import { DxTextBox, DxToast, DxLoadPanel } from 'devextreme-vue'
import { DxValidator, DxRequiredRule, DxEmailRule } from 'devextreme-vue/validator'
import { DxValidationGroup } from 'devextreme-vue/validation-group'
import 'devextreme/dist/css/dx.material.blue.dark.css'
import type { IMember } from '@/models/member/IMember'
import memberService from '@/services/member/MemberService'
import type ISignInMemberRequest from '@/services/member/ISignInMemberRequest'
import INotification from '@/models/notification/INotification'
import ENotificationType, { ENotificationTypeLabel } from '@/enums/ENotificationType'

export default defineComponent({
  components: {
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxEmailRule,
    DxValidationGroup,
    DxToast,
    DxLoadPanel
  },
  data() {
    return {
      ehLoad: false,
      member: {} as IMember,
      notification: {} as INotification | undefined
    }
  },
  methods: {
    async signInAsync(): Promise<void> {
      const validationGroup = this.$refs.signInGroup as DxValidationGroup
      const result = validationGroup.instance?.validate()

      if (!result?.isValid) return

      this.ehLoad = true

      const request = {
        eMail: this.member.eMail,
        password: this.member.password
      } as ISignInMemberRequest

      const success = await memberService.signInMemberAsync(request)

      if (success) {
        window.location.href = '/account'
      }

      this.showNotification('O E-Mail ou a Senha são Inválidos', ENotificationType.Error)
      this.ehLoad = false
    },
    showNotification(message: string, type: ENotificationType): void {
      const toast = this.$refs.toast as DxToast
      this.notification.Message = message
      this.notification.Type = ENotificationTypeLabel.get(type)
      toast.instance?.show()
    }
  }
})
</script>

<template>
  <!-- Info Area Start -->
  <section class="info-section mt-60">
    <DxToast :message="notification.Message" :type="notification.Type" ref="toast"></DxToast>
    <DxLoadPanel
      :visible="ehLoad"
      :position="{ my: 'center' }"
      :show-pane="true"
      :shading="true"
      shading-color="rgba(0,0,0,0.4)"
    ></DxLoadPanel>
    <div class="container pt-120">
      <div class="row justify-content-between">
        <div class="col-xl-6 col-lg-6">
          <div class="section-text">
            <h3 class="mb-3">Competitive Gaming Platform</h3>
            <p>
              In Dooplo, you can participate in online duels and tournaments for the games you like
              to start winning big prize money.
            </p>
          </div>
          <div class="dooplo-info cus-mar">
            <div class="single-box d-flex gap-3 align-items-center">
              <div class="icon-area d-center">
                <img src="/src/assets/images/icon/info-icon-1.png" alt="icon" />
              </div>
              <div class="text-area">
                <h5>Find an Opponent</h5>
                <p>Find similarly skilled players to compete with on the games you love.</p>
              </div>
            </div>
            <div class="single-box d-flex gap-3 align-items-center">
              <div class="icon-area d-center">
                <img src="/src/assets/images/icon/info-icon-2.png" alt="icon" />
              </div>
              <div class="text-area">
                <h5>Show Yourself</h5>
                <p>Participate in duels and tournaments to show what you are made of.</p>
              </div>
            </div>
            <div class="single-box d-flex gap-3 align-items-center">
              <div class="icon-area d-center">
                <img src="/src/assets/images/icon/info-icon-3.png" alt="icon" />
              </div>
              <div class="text-area">
                <h5>Win Rewards</h5>
                <p>Win real money.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 mt-5 mt-lg-0">
          <div class="form-content">
            <form action="#">
              <div class="head-area mb-4 text-center">
                <h4>Bem-Vindo De Volta</h4>
                <p>Você não tem uma conta? <a href="sign-up.html">Inscrever-se</a></p>
              </div>
              <div class="form-items">
                <DxValidationGroup name="signInGroup" ref="signInGroup">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <DxTextBox placeholder="E-Mail" v-model="member.eMail">
                          <DxValidator>
                            <DxRequiredRule message="O E-Mail é Requerido"></DxRequiredRule>
                            <DxEmailRule message="O E-Mail é Inválido"></DxEmailRule>
                          </DxValidator>
                        </DxTextBox>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <DxTextBox placeholder="Senha" mode="password" v-model="member.password">
                          <DxValidator>
                            <DxRequiredRule message="A Senha é Requerida"></DxRequiredRule>
                          </DxValidator>
                        </DxTextBox>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <a href="javascript:void(0)" class="mx-2">Esqueceu a Senha?</a>
                    </div>
                  </div>
                </DxValidationGroup>
              </div>
              <div class="btn-area mt-4 gap-3">
                <button type="button" class="cmn-btn d-center w-100" @click="signInAsync">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Info Area end -->
</template>
