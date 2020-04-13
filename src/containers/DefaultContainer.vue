<template>
  <div class="main-container">
    <header>
      <a href="" class="top-menu-item">Logowanie</a>
      <a href="" class="top-menu-item">Rejestracja</a>
    </header>
    <div class="menu-and-content">
      <nav class="sidebar-menu">
        <ul class="left-menu">
          <li class="menu-item">
            <a href="" >Świat</a>
            <ul class="left-submenu">
              <li class="submenu-item">
                <a href="">Wstęp</a>
              </li>
              <li class="submenu-item">
                <a href="">Changelingi</a>
              </li>
              <li class="submenu-item">
                <a href="">Wątki</a>
              </li>
              <li class="submenu-item">
                <a href="">Pomoce</a>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="">Mechanika</a>
          </li>
          <li class="menu-item">
            <a href="">Postaci</a>
            <ul class="left-submenu">
              <li class="submenu-item">
                <a href="">Postaci graczy</a>
              </li>
              <li class="submenu-item">
                <a href="">NPC</a>
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="">Galeria</a>
          </li>
        </ul>
      </nav>
      <div class="main-container-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/styles/reset.scss'
import '../assets/styles/style.scss'
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .main-container {
        background: url('../../src/assets/img/left-menu-bg.jpg');
        background-size: cover;
        color: #ffffff;
        @keyframes fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        animation: fadein 2s;
        
    header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px;
      a {
        margin-left: 20px;
        color: #eeeeff;
        text-decoration: none;
      }
    }
    .menu-and-content {
      display: flex;
      flex-wrap: nowrap;

      nav {
        height: calc(100vh - 56px);
        width: 200px;
        .left-menu {
          list-style-type: none;
          .menu-item {
            padding: 20px;
              a {
                color: #eeeeff;
                text-decoration: none;
                }
            .left-submenu {
              display: none;
              list-style-type: none;
            }
            &:hover {
              .left-submenu {
                display: initial;
              }
            }
          }
        }
      }
      .main-container-content {
        flex-grow: 1;
        background: #040e0b;
        @keyframes fadein {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100%   { opacity: 1; }
        }
        animation: fadein 3s;
      }
    }
  }
</style>
