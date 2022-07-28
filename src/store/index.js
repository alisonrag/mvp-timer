import { createStore } from "vuex";

export default createStore({
  state: {
    current_mvp_id: 0,
    mvp_timer_list: [],
    mvp_list: [
      {
        name: "Abelha-Rainha",
        id: 1059,
        respawn: [
          { map: "mjolnir_04", delay: "7200000", variance: "600000" },
          { map: "gld_dun02", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Amon Ra",
        id: 1511,
        respawn: [{ map: "moc_pryd06", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Amon Ra Pesadelo",
        id: 2362,
        respawn: [{ map: "moc_prydn2", delay: "3600000", variance: "600000" }],
      },
      {
        id: 1096,
        name: "Angeling",
        respawn: [
          { map: "pay_fild04", delay: 3600000, variance: 1800000 },
          { map: "yuno_fild03", delay: 3600000, variance: 1800000 },
          { map: "xmas_dun01", delay: 3600000, variance: 1800000 },
        ],
      },
      {
        name: "Aprendiz",
        id: 2441,
        respawn: [{ map: "teg_dun01", delay: "28800000", variance: "0" }],
      },
      {
        id: 1388,
        name: "Arc Angeling",
        respawn: [{ map: "yuno_fild05", delay: 3600000, variance: 180000 }],
      },
      {
        name: "Atroce",
        id: 1785,
        respawn: [
          { map: "ra_fild03", delay: "10800000", variance: "600000" },
          { map: "ra_fild04", delay: "18000000", variance: "600000" },
          { map: "ve_fild01", delay: "10800000", variance: "600000" },
          { map: "ve_fild02", delay: "21600000", variance: "600000" },
          { map: "gld_dun03_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Bafomé ",
        id: 1039,
        respawn: [
          { map: "gld_dun03", delay: "28800000", variance: "600000" },
          { map: "prt_maze03", delay: "7200000", variance: "600000" },
        ],
      },
      {
        name: "Bafomé Amaldiçoado",
        id: 2483,
        respawn: [{ mapname: "gl_cas02_", delay: 7200000, variance: 0 }],
      },
      {
        id: 1873,
        name: "Belzebu",
        respawn: [{ map: "abbey03", delay: 43200000, variance: 600000 }],
      },
      {
        name: "Besouro-Ladrão Dourado",
        id: 1086,
        respawn: [{ map: "prt_sewb4", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Bispo Decadente",
        id: 1871,
        respawn: [{ map: "abbey02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Boitatá ",
        id: 2068,
        respawn: [{ map: "bra_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Cavaleiro da Tempestade",
        id: 1251,
        respawn: [{ map: "xmas_dun02", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Detardeurus",
        id: 1719,
        respawn: [{ map: "abyss_03", delay: "10800000", variance: "600000" }],
      },
      {
        id: 1582,
        name: "Deviling",
        respawn: [
          { map: "pay_fild04", delay: 7200000, variance: 3600000 },
          { map: "yuno_fild03", delay: 3600000, variance: 1800000 },
        ],
      },
      {
        name: "Doppelganger",
        id: 1046,
        respawn: [
          { map: "gld_dun04", delay: "28800000", variance: "600000" },
          { map: "gef_dun02", delay: "7200000", variance: "600000" },
        ],
      },
      {
        name: "Drake",
        id: 1112,
        respawn: [{ map: "treasure02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Drácula",
        id: 1389,
        respawn: [{ map: "gef_dun01", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Eddga",
        id: 1115,
        respawn: [
          { map: "pay_fild10", delay: "7200000", variance: "600000" },
          { map: "gld_dun01_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Espadachim Egnigem",
        id: 1658,
        respawn: [{ map: "lhz_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Faraó ",
        id: 1157,
        respawn: [{ map: "in_sphinx5", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Flor do Luar",
        id: 1150,
        respawn: [
          { map: "gld_dun01", delay: "28800000", variance: "600000" },
          { map: "pay_dun04", delay: "3600000", variance: "600000" },
        ],
      },
      {
        name: "Freeoni",
        id: 1159,
        respawn: [{ map: "moc_fild17", delay: "7200000", variance: "600000" }],
      },
      {
        name: "General Daehyun",
        id: 2253,
        respawn: [{ map: "gld2_pay", delay: "28800000", variance: "600000" }],
      },
      {
        name: "General Tartaruga",
        id: 1312,
        respawn: [{ map: "tur_dun04", delay: "3600000", variance: "600000" }],
      },
      {
        id: 1120,
        name: "Ghostring",
        respawn: [
          { map: "pay_fild04", delay: 3600000, variance: 1800000 },
          { map: "gld_dun04", delay: 14400000, variance: 7200000 },
          { map: "prt_maze03", delay: 6800000, variance: 3400000 },
          { map: "treasure02", delay: 1980000, variance: 1200000 },
        ],
      },
      {
        name: "Gioia",
        id: 2251,
        respawn: [{ map: "gld2_ald", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Gorynych",
        id: 1885,
        respawn: [{ map: "mosk_dun03", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Guardião Morto Kades",
        id: 2255,
        respawn: [{ map: "gld2_gef", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Hatii",
        id: 1252,
        respawn: [{ map: "xmas_fild01", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Ifrit",
        id: 1832,
        respawn: [{ map: "thor_v03", delay: "39600000", variance: "600000" }],
      },
      {
        name: "Kiel-D-01",
        id: 1734,
        respawn: [{ map: "kh_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Kraken",
        id: 2202,
        respawn: [{ map: "iz_dun05", delay: "7200000", variance: "1800000" }],
      },
      {
        name: "Lady Branca",
        id: 1630,
        respawn: [{ map: "lou_dun03", delay: "7000000", variance: "600000" }],
      },
      {
        name: "Lady Tanee",
        id: 1688,
        respawn: [{ map: "ayo_dun02", delay: "25200000", variance: "600000" }],
      },
      {
        name: "Leak",
        id: 2156,
        respawn: [{ map: "dew_dun01", delay: "7200000", variance: "0" }],
      },
      {
        name: "Maya",
        id: 1147,
        respawn: [
          { map: "anthell02", delay: "7200000", variance: "600000" },
          { map: "gld_dun02_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        id: 1289,
        name: "Maya Macho",
        respawn: [{ map: "anthell01", delay: 7200000, variance: 0 }],
      },
      {
        name: "Morroc Ferido",
        id: 1917,
        respawn: [{ map: "moc_fild22", delay: "43200000", variance: "600000" }],
      },
      {
        name: "Orc Herói",
        id: 1087,
        respawn: [{ map: "gef_fild03", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Osíris",
        id: 1038,
        respawn: [{ map: "moc_pryd04", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Pesar Noturno",
        id: 1768,
        respawn: [{ map: "ra_san05", delay: "18000000", variance: "600000" }],
      },
      {
        name: "Pyuriel Furiosa",
        id: 2249,
        respawn: [{ map: "gld2_prt", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Quimera Venenosa",
        id: 3633,
        respawn: [{ mapname: "slabw01", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Rainha Scaraba",
        id: 2087,
        respawn: [{ map: "dic_dun02", delay: "7200000", variance: "0" }],
      },
      {
        name: "Rainha Scaraba",
        id: 2165,
        respawn: [{ map: "dic_dun03", delay: "7200000", variance: "0" }],
      },
      {
        name: "RSX-0806",
        id: 1623,
        respawn: [{ map: "ein_dun02", delay: "7500000", variance: "600000" }],
      },
      {
        name: "Samurai Encarnado",
        id: 1492,
        respawn: [{ map: "ama_dun03", delay: "5460000", variance: "600000" }],
      },
      {
        name: "Senhor das Trevas",
        id: 1272,
        respawn: [
          { map: "gld_dun04_2", delay: "28800000", variance: "600000" },
          { map: "gl_chyard", delay: "3600000", variance: "600000" },
          { map: "gl_chyard_", delay: "3600000", variance: "600000" },
        ],
      },
      {
        name: "Senhor dos Mortos",
        id: 1373,
        respawn: [{ mapname: "niflheim", delay: 7980000, variance: 0 }],
      },
      {
        name: "Senhor dos Orcs",
        id: 1190,
        respawn: [{ map: "gef_fild10", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Serpente Suprema",
        id: 1418,
        respawn: [{ map: "gon_dun03", delay: "5650000", variance: "600000" }],
      },
      {
        name: "Superaprendiz",
        id: 2442,
        respawn: [{ map: "teg_dun02", delay: "7200000", variance: "0" }],
      },
      {
        name: "Tao Gunka",
        id: 1583,
        respawn: [{ map: "beach_dun", delay: "18000000", variance: "600000" }],
      },
      {
        name: "Valquíria Randgris",
        id: 1751,
        respawn: [{ map: "odin_tem03", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Vesper",
        id: 1685,
        respawn: [{ map: "jupe_core", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Vigia do Tempo",
        id: 3074,
        respawn: [{ map: "c_tower3_", delay: "7200000", variance: "0" }],
      },
    ],
  },
  getters: {
    getMVPById: (state) => (id) => {
      return state.mvp_list.find((mvp) => mvp.id === id);
    },
  },
  mutations: {
    setCurrentMvpId(state, id) {
      state.current_mvp_id = id;
    },
    addMVPRow(state, mvp) {
      state.mvp_timer_list.push(mvp);
    },
    loadMVPListFromLocalStorage(state) {
      let mvp_timer_list = localStorage.getItem("mvp_timer_list");

      if (mvp_timer_list != null) {
        let mvp_timers = JSON.parse(mvp_timer_list);
        mvp_timers.forEach(function (mvp) {
          mvp.died_time = new Date(mvp.died_time);
          state.mvp_timer_list.push(mvp);
        });
      }
    },
    saveMVPListInLocalStorage(state) {
      localStorage.setItem(
        "mvp_timer_list",
        JSON.stringify(state.mvp_timer_list)
      );
    },
  },
  actions: {},
  modules: {},
});
