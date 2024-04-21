<script lang="ts">
import { RouterLink } from 'vue-router'
import { defineComponent } from 'vue'
import memberService from '@/services/member/MemberService'
import jwtTokenService from '@/services/jwtToken/JWTTokenService'
import type { IMember } from '@/models/member/IMember'
import type { IAvatar } from '@/models/avatar/IAvatar'
import type IGetMemberRequest from '@/services/member/IGetMemberRequest'
export default defineComponent({
  components: {},
  data() {
    return {
      member: {} as IMember | undefined,
      avatarActivated: {} as IAvatar | undefined
    }
  },
  methods: {
    async signOutAsync(): Promise<void> {
      await memberService.signOutMemberAsync()
      window.location.href = '/sign-in'
    },

    async getMemberAsync(): Promise<void> {
      const memberId = jwtTokenService.getMemberId()
      if (!memberId) {
        this.member = undefined
        return
      }

      const request = { id: memberId, isActive: true, isErased: false } as IGetMemberRequest
      this.member = (await memberService.getMemberAsync(request))[0]
      this.avatarActivated = this.member.profile?.avatars?.filter((avt) => avt.isActive)[0]
    }
  },
  computed: {},

  async beforeMount() {
    await this.getMemberAsync()
  }
})
</script>

<template>
  <!-- header-section start -->
  <header class="header-section header-menu">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container">
        <nav class="navbar w-100 navbar-expand-lg">
          <a href="index.html" class="navbar-brand d-flex align-items-center gap-2">
            <img src="/src/assets/images/fav.png" class="logo" alt="logo" />
            <img src="/src/assets/images/logo-alt.png" class="logo-alt" alt="logo-alt" />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-content"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbar-content">
            <ul class="navbar-nav gap-3 py-4 py-lg-0 m-auto align-self-center">
              <li class="dropdown show-dropdown">
                <a class="dropdown-toggle dropdown-nav active" href="javascript:void(0)">Home</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="index.html">Home One</a></li>
                  <li><a class="dropdown-item" href="index-2.html">Home Two</a></li>
                  <li><a class="dropdown-item" href="index-3.html">Home Three</a></li>
                  <li><a class="dropdown-item" href="index-4.html">Home Four</a></li>
                  <li><a class="dropdown-item" href="index-5.html">Home Five</a></li>
                </ul>
              </li>
              <li>
                <a class="dropdown-nav" href="play-as-you-go.html">Play</a>
              </li>
              <li class="dropdown show-dropdown">
                <a class="dropdown-toggle dropdown-nav" href="javascript:void(0)">games</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="games.html">games</a></li>
                  <li><a class="dropdown-item" href="games-details.html">games Details</a></li>
                </ul>
              </li>
              <li>
                <a class="dropdown-nav" href="matchfinders.html">Matchfinders</a>
              </li>
              <li>
                <a class="dropdown-nav" href="leaderboard.html">leaderboard</a>
              </li>
              <li class="dropdown show-dropdown">
                <a class="dropdown-toggle dropdown-nav" href="javascript:void(0)">Pages</a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="about-us.html">About</a>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)"
                      >tournament</a
                    >
                    <ul class="sub sub-menu dropend">
                      <li><a class="dropdown-item" href="tournament.html">tournament</a></li>
                      <li>
                        <a class="dropdown-item" href="tournament-details.html"
                          >tournament Details</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)">accounts</a>
                    <ul class="sub sub-menu dropend">
                      <li><a class="dropdown-item" href="accounts-1.html">accounts one</a></li>
                      <li><a class="dropdown-item" href="accounts-2.html">accounts two</a></li>
                      <li><a class="dropdown-item" href="accounts-3.html">accounts three</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="affiliate.html">affiliate</a>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)">careers</a>
                    <ul class="sub sub-menu dropend">
                      <li><a class="dropdown-item" href="careers.html">careers</a></li>
                      <li>
                        <a class="dropdown-item" href="careers-details.html">careers Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="community.html">community</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="features.html">features</a>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)"
                      >help center</a
                    >
                    <ul class="sub sub-menu dropend">
                      <li>
                        <a class="dropdown-item" href="help-center.html">help center one</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="help-center-2.html">help center two</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="help-center-3.html">help center three</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)"
                      >group finder</a
                    >
                    <ul class="sub sub-menu dropend">
                      <li><a class="dropdown-item" href="group-finder.html">group finder</a></li>
                      <li>
                        <a class="dropdown-item" href="group-details.html">group Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="sub-dropdown">
                    <a class="dropdown-item dropdown-toggle" href="javascript:void(0)">profile</a>
                    <ul class="sub sub-menu dropend">
                      <li>
                        <a class="dropdown-item" href="public-profile.html">public profile</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="private-profile.html">private profile</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="privacy-policy.html">privacy policy</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="terms-conditions.html">terms conditions</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="how-works.html">how works</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="error.html">404</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown show-dropdown">
                <a class="dropdown-toggle dropdown-nav" href="javascript:void(0)">shop</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="shop.html">shop</a></li>
                  <li><a class="dropdown-item" href="shop-details.html">shop details one</a></li>
                  <li>
                    <a class="dropdown-item" href="shop-details-2.html">shop details two</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="shop-details-3.html">shop details three</a>
                  </li>
                  <li><a class="dropdown-item" href="shop-cart.html">shop cart</a></li>
                  <li>
                    <a class="dropdown-item" href="calculate-shipping-1.html">shipping one</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="calculate-shipping-2.html">shipping two</a>
                  </li>
                  <li><a class="dropdown-item" href="checkout.html">checkout</a></li>
                </ul>
              </li>
            </ul>
            <div
              class="right-area position-relative d-flex gap-3 gap-xxl-5 align-items-center"
              v-if="!member"
            >
              <div class="single-item form-search-area">
                <div class="form-search-btn cmn-head dot">
                  <div class="icon-area d-center">
                    <img src="/src/assets/images/icon/search-icon.png" alt="Icon" />
                  </div>
                </div>
                <div class="main-area px-2 py-2 py-sm-4 px-sm-4 form-search-content">
                  <form action="#" class="search-form">
                    <input type="text" placeholder="Enter Keywords......." />
                    <button class="cmn-btn">Search</button>
                  </form>
                </div>
              </div>
              <div class="btn-area d-flex gap-3 align-items-center">
                <RouterLink to="/sign-in">Entrar</RouterLink>
                <RouterLink to="/sign-up" class="cmn-btn">Inscrever-se</RouterLink>
              </div>
            </div>
            <div
              class="right-area position-relative d-flex gap-3 gap-xxl-5 align-items-center"
              v-else
            >
              <div class="single-item form-search-area">
                <div class="form-search-btn cmn-head dot">
                  <div class="icon-area d-center">
                    <img src="/src/assets/images/icon/search-icon.png" alt="Icon" />
                  </div>
                </div>
                <div class="main-area px-2 py-2 py-sm-4 px-sm-4 form-search-content">
                  <form action="#" class="search-form">
                    <input type="text" placeholder="Enter Keywords......." />
                    <button class="cmn-btn">Search</button>
                  </form>
                </div>
              </div>
              <div class="btn-area d-block d-lg-none d-flex gap-3 align-items-center">
                <a href="sign-in.html">Sign In</a>
                <a href="sign-up.html" class="cmn-btn">Sign up</a>
              </div>
              <div class="single-item d-none d-lg-block shop-cart-area">
                <div class="shop-cart-btn cmn-head dot">
                  <img
                    src="/src/assets/images/icon/cart-icon.png"
                    class="cart-icon max-un"
                    alt="icon"
                  />
                  <div class="abs-area">
                    <span class="d-center">3</span>
                  </div>
                </div>
                <div class="main-area px-4 py-4 shop-cart-content">
                  <div class="head-area mb-4">
                    <h6>Shopping Cart <span>3</span></h6>
                  </div>
                  <ul>
                    <li>
                      <a href="javascript:void(0)" class="d-flex align-items-center">
                        <div class="img-area d-center">
                          <img
                            src="/src/assets/images/products-image-9.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <h6 class="m-0">Esports Black Shirt</h6>
                          <p class="mdtxt prize-area mt-2">$ 19.99 USD X 01</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="d-flex align-items-center">
                        <div class="img-area d-center">
                          <img
                            src="/src/assets/images/products-image-10.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <h6 class="m-0">Esports Black Shirt</h6>
                          <p class="mdtxt prize-area mt-2">$ 19.99 USD X 01</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="d-flex align-items-center">
                        <div class="img-area d-center">
                          <img
                            src="/src/assets/images/products-image-11.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <h6 class="m-0">Esports Black Shirt</h6>
                          <p class="mdtxt prize-area mt-2">$ 19.99 USD X 01</p>
                        </div>
                      </a>
                    </li>
                    <li class="total-cart-area mt-5 py-3 d-flex justify-content-between">
                      <span>Total:</span>
                      <span>$64.99</span>
                    </li>
                    <li class="d-center">
                      <div class="acc-btn-area">
                        <div class="btn-area mt-4 d-flex text-nowrap gap-4">
                          <a href="javascript:void(0)" class="cmn-btn">Shopping cart</a>
                          <a href="javascript:void(0)" class="cmn-btn alt">Go to checkout</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-item d-none d-lg-block chat-area">
                <div class="chat-btn cmn-head position-relative">
                  <img
                    src="/src/assets/images/icon/chat-icon.png"
                    class="chat-icon max-un"
                    alt="icon"
                  />
                  <div class="abs-area">
                    <span class="d-center">3</span>
                  </div>
                </div>
                <div class="main-area chat-content">
                  <div class="chat-item text-nowrap">
                    <div class="chat-top-side">
                      <div class="chat-form">
                        <form action="#">
                          <div class="form-group py-1 input-area d-flex align-items-center">
                            <input type="text" placeholder="Search" />
                            <img src="/src/assets/images/icon/search-icon.png" alt="icon" />
                          </div>
                        </form>
                      </div>
                      <ul>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-1.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status orange"></span>
                              offline
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-2.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-3.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status orange"></span>
                              offline
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-4.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-5.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status orange"></span>
                              offline
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-6.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-7.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-8.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-9.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status green"></span>
                              online
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src="/src/assets/images/leaderboard-img-10.png" alt="image" />
                          <div>
                            <h6>Prénom Nom</h6>
                            <p>
                              <span class="status orange"></span>
                              offline
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="main">
                      <div class="d-flex px-3 py-2 align-items-center gap-3">
                        <img src="/src/assets/images/leaderboard-img-1.png" alt="image" />
                        <div>
                          <p>Chat with Vincent Porter</p>
                        </div>
                      </div>
                      <ul class="chat-main">
                        <li class="you">
                          <div class="entete">
                            <span class="status green"></span>
                            <p>Dana</p>
                            <span class="mdr">10:12AM, Today</span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">Which game you play now?</p>
                        </li>
                        <li class="me">
                          <div class="entete">
                            <span class="mdr">10:12AM, Today</span>
                            <p>Dana</p>
                            <span class="status blue"></span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">I play Stronghold Kingdoms</p>
                        </li>
                        <li class="me">
                          <div class="entete">
                            <span class="mdr">10:12AM, Today</span>
                            <p>Dana</p>
                            <span class="status blue"></span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">OK</p>
                        </li>
                        <li class="you">
                          <div class="entete">
                            <span class="status green"></span>
                            <p>Dana</p>
                            <span class="mdr">10:12AM, Today</span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">Which game you play now?</p>
                        </li>
                        <li class="me">
                          <div class="entete">
                            <span class="mdr">10:12AM, Today</span>
                            <p>Dana</p>
                            <span class="status blue"></span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">I play Stronghold Kingdoms</p>
                        </li>
                        <li class="me">
                          <div class="entete">
                            <span class="mdr">10:12AM, Today</span>
                            <p>Dana</p>
                            <span class="status blue"></span>
                          </div>
                          <div class="triangle"></div>
                          <p class="message">OK</p>
                        </li>
                      </ul>
                      <div class="chat-footer text-right text-end">
                        <form action="#">
                          <textarea cols="10" rows="2" placeholder="Type your message"></textarea>
                          <div class="upload-send px-2 d-flex justify-content-between">
                            <label for="files1">
                              <img src="/src/assets/images/icon/upload-img.png" alt="icon" />
                            </label>
                            <input type="file" id="files1" class="d-none" />
                            <button type="submit">Send</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-item d-none d-lg-block notifications-area">
                <div class="notifications-btn cmn-head dot">
                  <img
                    src="/src/assets/images/icon/nofify-icon.png"
                    class="bell-icon max-un"
                    alt="icon"
                  />
                  <div class="abs-area notify">
                    <span class="d-center">3</span>
                  </div>
                </div>
                <div class="main-area px-4 py-4 notifications-content">
                  <div class="head-area d-flex justify-content-between">
                    <h5>Notifications</h5>
                    <span class="mdtxt">Mark all as Read</span>
                  </div>
                  <ul>
                    <li>
                      <a href="javascript:void(0)" class="d-flex">
                        <div class="img-area">
                          <img
                            src="/src/assets/images/leaderboard-img-1.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <p>
                            <b>Nick Grissom</b> posted a comment on your <span>status update</span>
                          </p>
                          <p class="mdtxt time-area mt-2">2 minutes ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="d-flex">
                        <div class="img-area">
                          <img
                            src="/src/assets/images/leaderboard-img-1.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <p>
                            <b>Nick Grissom</b> posted a comment on your <span>status update</span>
                          </p>
                          <p class="mdtxt time-area mt-2">2 minutes ago</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="d-flex">
                        <div class="img-area">
                          <img
                            src="/src/assets/images/leaderboard-img-1.png"
                            class="max-un"
                            alt="image"
                          />
                        </div>
                        <div class="text-area">
                          <p>
                            <b>Nick Grissom</b> posted a comment on your <span>status update</span>
                          </p>
                          <p class="mdtxt time-area mt-2">2 minutes ago</p>
                        </div>
                      </a>
                    </li>
                    <li class="d-center">
                      <a href="javascript:void(0)" class="cmn-btn alt">View all Notifications</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-item d-none d-lg-block user-area">
                <div class="profile-area d-flex align-items-center">
                  <span class="user-profile cmn-head d-flex gap-2 align-items-center">
                    <div v-html="avatarActivated?.content" class="avatar"></div>
                    <i class="icon-d-arrow-thin"></i>
                  </span>
                </div>
                <div class="main-area user-content">
                  <div class="head-area py-4 text-center">
                    <h5>Hello,</h5>
                    <p class="email-id">x***9@bunlets.com</p>
                  </div>
                  <div class="cash-top">
                    <div class="cash-point d-flex gap-3 align-items-center">
                      <div class="img-area d-center">
                        <img src="/src/assets/images/icon/cash-icon.png" alt="icon" />
                      </div>
                      <div class="info-area">
                        <h5>$150.00</h5>
                        <span>Balance</span>
                      </div>
                    </div>
                    <div class="cash-point">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex gap-3">
                          <div class="img-area d-center">
                            <img src="/src/assets/images/icon/cash-icon.png" alt="icon" />
                          </div>
                          <div class="info-area">
                            <h5>50</h5>
                            <span>Points</span>
                          </div>
                        </div>
                        <div class="btn-area">
                          <a href="javascript:void(0)">Exchange</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="acc-btn-area py-4 px-4">
                    <a
                      href="javascript:void(0)"
                      class="account-area d-center justify-content-between"
                    >
                      <div class="d-flex gap-2">
                        <span class="icon-item d-center">
                          <img src="/src/assets/images/icon/user-6.png" alt="icon" />
                        </span>
                        <span>My Account</span>
                      </div>
                      <div class="icon-arrow d-center">
                        <i class="icon-c-arrow-single"></i>
                      </div>
                    </a>
                    <div class="btn-area mt-5 d-flex gap-4">
                      <a href="javascript:void(0)" class="cmn-btn">Deposit</a>
                      <a href="javascript:void(0)" class="cmn-btn alt">Withdraw</a>
                    </div>
                  </div>
                  <div class="bottom-area">
                    <a
                      href="javascript:void(0)"
                      class="d-flex justify-content-center py-3 gap-2"
                      @click="signOutAsync"
                    >
                      <div class="icon-log">
                        <img src="/src/assets/images/icon/logout-icon.png" alt="icon" />
                      </div>
                      Sair
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </header>
  <!-- header-section end -->
</template>

<style scoped>
.avatar {
  width: 69px;
  height: 69px;
}
</style>
