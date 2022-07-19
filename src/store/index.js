import { createStore } from "vuex";

export default createStore({
  state: {
    current_mvp_id: 0,
    mvp_timer_list: [],
    mvp_list: [
      {
        name: "Orc Hero",
        id: "1087",
        respawn: [{ map: "gef_fild03", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Orc Lord",
        id: "1190",
        respawn: [{ map: "gef_fild10", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Garm",
        id: "1252",
        respawn: [{ map: "xmas_fild01", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Mistress",
        id: "1059",
        respawn: [
          { map: "mjolnir_04", delay: "7200000", variance: "600000" },
          { map: "gld_dun02", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Phreeoni",
        id: "1159",
        respawn: [{ map: "moc_fild17", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Wounded Morocc",
        id: "1917",
        respawn: [{ map: "moc_fild22", delay: "43200000", variance: "600000" }],
      },
      {
        name: "Atroce",
        id: "1785",
        respawn: [
          { map: "ra_fild03", delay: "10800000", variance: "600000" },
          { map: "ra_fild04", delay: "18000000", variance: "600000" },
          { map: "ve_fild01", delay: "10800000", variance: "600000" },
          { map: "ve_fild02", delay: "21600000", variance: "600000" },
          { map: "gld_dun03_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Eddga",
        id: "1115",
        respawn: [
          { map: "pay_fild10", delay: "7200000", variance: "600000" },
          { map: "gld_dun01_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Detardeurus",
        id: "1719",
        respawn: [{ map: "abyss_03", delay: "10800000", variance: "600000" }],
      },
      {
        name: "Fallen Bishop",
        id: "1871",
        respawn: [{ map: "abbey02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Beelzebub",
        id: "1873",
        respawn: [{ map: "abbey03", delay: "43200000", variance: "600000" }],
      },
      {
        name: "Tao Gunka",
        id: "1583",
        respawn: [{ map: "beach_dun", delay: "18000000", variance: "600000" }],
      },
      {
        name: "Maya",
        id: "1147",
        respawn: [
          { map: "anthell02", delay: "7200000", variance: "600000" },
          { map: "gld_dun02_2", delay: "28800000", variance: "600000" },
        ],
      },
      {
        name: "Lady Tanee",
        id: "1688",
        respawn: [{ map: "ayo_dun02", delay: "25200000", variance: "600000" }],
      },
      {
        name: "Samurai Specter",
        id: "1492",
        respawn: [{ map: "ama_dun03", delay: "5460000", variance: "600000" }],
      },
      {
        name: "Time Holder",
        id: "3074",
        respawn: [{ map: "c_tower3_", delay: "7200000", variance: "0" }],
      },
      {
        name: "Scaraba Queen",
        id: "2087",
        respawn: [{ map: "dic_dun02", delay: "7200000", variance: "0" }],
      },
      {
        name: "Gold Queen Scaraba",
        id: "2165",
        respawn: [{ map: "dic_dun03", delay: "7200000", variance: "0" }],
      },
      {
        name: "Leak",
        id: "2156",
        respawn: [{ map: "dew_dun01", delay: "7200000", variance: "0" }],
      },
      {
        name: "RSX-0806",
        id: "1623",
        respawn: [{ map: "ein_dun02", delay: "7500000", variance: "600000" }],
      },
      {
        name: "Boitata",
        id: "2068",
        respawn: [{ map: "bra_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Moonlight Flower",
        id: "1150",
        respawn: [
          { map: "gld_dun01", delay: "28800000", variance: "600000" },
          { map: "pay_dun04", delay: "3600000", variance: "600000" },
        ],
      },
      {
        name: "General Daehyun",
        id: "2253",
        respawn: [{ map: "gld2_pay", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Gioia",
        id: "2251",
        respawn: [{ map: "gld2_ald", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Baphomet",
        id: "1039",
        respawn: [
          { map: "gld_dun03", delay: "28800000", variance: "600000" },
          { map: "prt_maze03", delay: "7200000", variance: "600000" },
        ],
      },
      {
        name: "Angry Student Pyuriel",
        id: "2249",
        respawn: [{ map: "gld2_prt", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Doppelganger",
        id: "1046",
        respawn: [
          { map: "gld_dun04", delay: "28800000", variance: "600000" },
          { map: "gef_dun02", delay: "7200000", variance: "600000" },
        ],
      },
      {
        name: "Dark Lord",
        id: "1272",
        respawn: [
          { map: "gld_dun04_2", delay: "28800000", variance: "600000" },
          { map: "gl_chyard", delay: "3600000", variance: "600000" },
          { map: "gl_chyard_", delay: "3600000", variance: "600000" },
        ],
      },
      {
        name: "Dark Guardian Kades",
        id: "2255",
        respawn: [{ map: "gld2_gef", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Dracula",
        id: "1389",
        respawn: [{ map: "gef_dun01", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Evil Snake Lord",
        id: "1418",
        respawn: [{ map: "gon_dun03", delay: "5650000", variance: "600000" }],
      },
      {
        name: "Kraken",
        id: "2202",
        respawn: [{ map: "iz_dun05", delay: "7200000", variance: "1800000" }],
      },
      {
        name: "Vesper",
        id: "1685",
        respawn: [{ map: "jupe_core", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Pharaoh",
        id: "1157",
        respawn: [{ map: "in_sphinx5", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Kiel D-01",
        id: "1734",
        respawn: [{ map: "kh_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "White Lady",
        id: "1630",
        respawn: [{ map: "lou_dun03", delay: "7000000", variance: "600000" }],
      },
      {
        name: "Egnigem Cenia",
        id: "1658",
        respawn: [{ map: "lhz_dun02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Osiris",
        id: "1038",
        respawn: [{ map: "moc_pryd04", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Amon Ra",
        id: "1511",
        respawn: [{ map: "moc_pryd06", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Nightmare Amon Ra",
        id: "2362",
        respawn: [{ map: "moc_prydn2", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Gopinich",
        id: "1885",
        respawn: [{ map: "mosk_dun03", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Valkyrie Randgris",
        id: "1751",
        respawn: [{ map: "odin_tem03", delay: "28800000", variance: "600000" }],
      },
      {
        name: "Golden Thief Bug",
        id: "1086",
        respawn: [{ map: "prt_sewb4", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Gloom Under Night",
        id: "1768",
        respawn: [{ map: "ra_san05", delay: "18000000", variance: "600000" }],
      },
      {
        name: "Spider Chariot",
        id: "3741",
        respawn: [{ map: "rockmi1", delay: "7200000", variance: "600000" }],
      },
      {
        name: "R48-85-Bestia",
        id: "20381",
        respawn: [{ map: "sp_rudus2", delay: "21600000", variance: "600000" }],
      },
      {
        name: "Ifrit",
        id: "1832",
        respawn: [{ map: "thor_v03", delay: "39600000", variance: "600000" }],
      },
      {
        name: "The Last One",
        id: "2441",
        respawn: [{ map: "teg_dun01", delay: "28800000", variance: "0" }],
      },
      {
        name: "King of the Alley",
        id: "2442",
        respawn: [{ map: "teg_dun02", delay: "7200000", variance: "0" }],
      },
      {
        name: "Turtle General",
        id: "1312",
        respawn: [{ map: "tur_dun04", delay: "3600000", variance: "600000" }],
      },
      {
        name: "Drake",
        id: "1112",
        respawn: [{ map: "treasure02", delay: "7200000", variance: "600000" }],
      },
      {
        name: "Stormy Knight",
        id: "1251",
        respawn: [{ map: "xmas_dun02", delay: "3600000", variance: "600000" }],
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
  },
  actions: {},
  modules: {},
});
