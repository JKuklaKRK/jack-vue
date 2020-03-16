<template>
  <div class="main-container">
    <header>
      <a href="" class="top-menu-item">Logowanie</a>
      <a href="" class="top-menu-item">Rejestracja</a>
    </header>
    <nav>
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
    <router-view/>
  </div>
</template>

<script>
import '../assets/styles/reset.scss'
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
    header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 20px;
      background-color: green;
      a {
        margin-left: 20px;
        color: white;
        text-decoration: none;
      }
    }
    nav {
      height: calc(100vh - 56px);
      width: 200px;
        background-color: blue;
      .left-menu {
        list-style-type: none;
        .menu-item {
          padding: 20px;
            a {
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
  }
</style>
