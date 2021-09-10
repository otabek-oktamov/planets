
Vue.component('planet', {
  template: `
  <div>
    <header class="site-header">
        <div class="container site-header__container">
          <a href="#" class="site-header__logo">
            <img src="./img/logo.svg" alt="planets" />
          </a>
          <nav class="site-nav">
            <ul class="site-nav__list">
              <li @click="show"  @click="change(name)"  v-for="name in planetsList" class="site-nav__item">
                <a class="site-nav__link site-nav__item--active" :class="{ active: currentPlanet === name }" href="#"
                :style="[currentPlanet === name? {'color': planets[name].backgroundColor}: {color: '#fff'}]"
                  >{{name}}</a
                >
              </li>
            </ul>
          </nav>
          <button @click="showNav" type="button" class="nav-button"><img src="./img/nav.svg" alt="nav-button" width="24" height="17"></button>
        </div>
      </header>
      <div class="main">
        <div class="container main__container">
          <div class="main-img">
          <div v-show="planets[currentPlanet].name =='Earth'"  class="planet planet-earth">
          <div class="container">
            <div class="loader">
              <span></span>
            </div>
            <div class="earth"></div>
          </div>
        </div>
            <img
            v-show="planets[currentPlanet].name!=='Earth'"
              :src="planets[currentPlanet][currentText].img"
              alt="mercuriy"
            />
          </div>
          <div class="main-content">
          <div class="earth-top">
          <h2 v-show="currentPlanet == planet.name" v-for="planet in planets" class="section-title">{{planet.name}}</h2>
          <p  class="section-text">
          {{ planets[currentPlanet][currentText].text }}
          </p>
          <span class="source"
            ><span>Source : </span>
            <a class="source__link" :href="planets[currentPlanet].wikipediaLink"> Wikipedia</a></span
          ></div>
           <div class="buttons"> <button v-for="btn in buttonList" class="btn section-btn" @click="currentText=btn"

           :style="[currentText == btn ? {'background-color': planets[currentPlanet].backgroundColor} : {'background-color': transparent}]"

          
           >
             <span class="section-btn__num">{{planets[currentPlanet][btn].index}}</span>{{ btn }}
           </button> </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container footer__container">
          <ul class="footer__list">
            <li class="footer__item" v-for="fact in aboutList">
              <span class="footer__text">{{ fact }}</span>
              <h3 class="footer__title">{{planets[currentPlanet].about[fact]}}</h3>
            </li>
            
          </ul>
        </div>
      </footer>
   </div>
  `,
  data() {
    return {
      aboutList: ["rotation time", "revolution time", "radius", "average temp"],
      buttonList: ["overview", "internal structure", "surface geology"],
      planetsList: ["Earth", "Venus", "Mercuriy", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
      planets: {
        "Mercuriy": {
          name: "Mercuriy",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#419Ebb",
          src: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BA%D1%83%D1%80%D0%B8%D0%B9",
          "overview": {
            index: "01",
            text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            img: "img/mercuriy.png"
          },
          "internal structure": {
            index: "02",
            text: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            img: "img/mercuriy-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            img: "img/mercuriy-geo.png"
          },
          about: {
            "rotation time": "58.6 days",
            "revolution time": "87.97 days",
            "radius": "2,439.7 km",
            "average temp": "430°c",
          },
        },
        "Venus": {
          name: "Venus",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#EDA249",
          src: "https://en.wikipedia.org/wiki/Venus",
          "overview": {
            index: "01",
            text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            img: "img/venus.png"
          },
          "internal structure": {
            index: "02",
            text: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            img: "img/venus-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            img: "img/venus-geo.png"
          },
          about: {
            "rotation time": "243 days",
            "revolution time": "224.7 days",
            "radius": "6,051.8 km",
            "average temp": "471°c",
          },
        },
        "Earth": {
          name: "Earth",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#6D2ED5",
          src: "https://en.wikipedia.org/wiki/Earth",
          "overview": {
            index: "01",
            text: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            img: "img/earth.png"
          },
          "internal structure": {
            index: "02",
            text: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            img: "img/earth-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            img: "img/earth-geo.png"
          },
          about: {
            "rotation time": "0.99 days",
            "revolution time": "365.26 days",
            "radius": "6,371 km",
            "average temp": "16°c",
          },
        },
        "Mars": {
          name: "Mars",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#D14C32",

          "overview": {
            index: "01",
            text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the",
            img: "img/mars.png"
          },
          "internal structure": {
            index: "02",
            text: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            img: "img/mars-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            img: "img/mars-geo.png"
          },
          about: {
            "rotation time": "1.03 days",
            "revolution time": "1.88 years",
            "radius": "3,389.5 km",
            "average temp": "−28°c",
          },
        },
        "Jupiter": {
          name: "Jupiter",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#D83A34",
          "overview": {
            index: "01",
            text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            img: "img/jupiter.png"
          },
          "internal structure": {
            index: "02",
            text: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            img: "img/jupiter-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            img: "img/jupiter-geo.png"
          },
          about: {
            "rotation time": "9.93 hours",
            "revolution time": "11.86 years",
            "radius": "69,911 km",
            "average temp": "-108°c",
          },
        },
        "Saturn": {
          name: "Saturn",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#CD5120",
          "overview": {
            index: "01",
            text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            img: "img/saturn.png"
          },
          "internal structure": {
            index: "02",
            text: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            img: "img/saturn-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            img: "img/saturn-geo.png"
          },
          about: {
            "rotation time": "10.8 hours",
            "revolution time": "29.46 years",
            "radius": "58,232 km",
            "average temp": "-138°c",
          },
        },
        "Uranus": {
          name: "Uranus",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#1EC1A2",
          "overview": {
            index: "01",
            text: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            img: "img/uranus.png"
          },
          "internal structure": {
            index: "02",
            text: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            img: "img/uranus-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            img: "img/uranus-geo.png"
          },
          about: {
            "rotation time": "17.2 hours",
            "revolution time": "84 years",
            "radius": "25,362 km",
            "average temp": "-195°c",
          },
        },
        "Neptune": {
          name: "Neptune",
          wikipediaLink: "https://wikipedia.com",
          backgroundColor: "#2D68F0",
          "overview": {
            index: "01",
            text: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            img: "img/neptune.png"
          },
          "internal structure": {
            index: "02",
            text: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            img: "img/neptune-structure.png"
          },
          "surface geology": {
            index: "03",
            text: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            img: "img/neptune-geo.png"
          },
          about: {
            "rotation time": "16.08 hours",
            "revolution time": "164.79 years",
            "radius": "24,622 km",
            "average temp": "-201°c",
          },
        },
      },
      currentPlanet: "Earth",
      currentText: "overview"

    }
  },
  methods: {
    change(param) {
      this.currentPlanet = param,
        this.currentText = "overview"
    },
    showNav() {
      document.querySelector('.site-nav__list').classList.toggle('site-nav--active')
    },
    show() {
      document.querySelector('.site-nav__list').classList.remove('site-nav--active')
    }
  },

}
)


const app = new Vue({
  el: '#app',
})

window.addEventListener('load', () => {
  document.body.classList.remove('none')
  document.querySelector('.overlay').classList.add('hidden')
  document.querySelector('.loader-div').classList.add('hidden')
})