<template>
  <div class="predictions">
    <Wrapper title="Popular Matches" buttonLabel="view all">
      <ul>
        <li v-for="match in matches" :key="match.matchTime">
          <Prediction
            :homeClubLogo="match.homeClubLogo"
            :homeClubName="match.homeClubName"
            :matchTime="match.matchTime"
            :awayClubLogo="match.awayClubLogo"
            :awayClubName="match.awayClubName"
            :homeClubTipster="match.homeClubTipster"
            :drawTipster="match.drawTipster"
            :awayClubTipster="match.awayClubTipster"
            :sportLogo="match.sportLogo"
            :backgroundImage="match.backgroundImage"
            :isLive="match.isLive"
            :liveScore="match.liveScore"
            :isSelected="match.isSelected"
          />
        </li>
      </ul>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "../Wrapper/Wrapper.vue";
import Prediction from "./Prediction.vue";
export default {
  components: {
    Wrapper,
    Prediction,
  },
  data() {
    return {
      matches: [
        {
          homeClubLogo: require("./assets/inter.png"),
          homeClubName: "Inter",
          matchTime: "10 Jun 23:00",
          awayClubLogo: require("./assets/city.png"),
          awayClubName: "Man City",
          homeClubTipster: "11.00",
          drawTipster: "5.00",
          awayClubTipster: "2.00",
          sportLogo: require("./assets/league.svg"),
          backgroundImage: String,
          isLive: false,
          liveScore: "",
          isSelected: true,
        },
        {
          homeClubLogo: require("./assets/real.png"),
          homeClubName: "Real Madrid",
          matchTime: "1 st Half 34:45",
          awayClubLogo: require("./assets/chelsea.svg"),
          awayClubName: "Chelsea",
          homeClubTipster: "11.00",
          drawTipster: "5.00",
          awayClubTipster: "2.00",
          sportLogo: require("./assets/europe.png"),
          backgroundImage: require("./assets/live-banner.png"),
          isLive: true,
          liveScore: "1 : 2",
        },
        {
          homeClubLogo: require("./assets/liverpool.png"),
          homeClubName: "Liverpool",
          matchTime: "2 Jul 23:00",
          awayClubLogo: require("./assets/utd.png"),
          awayClubName: "Man Utd",
          homeClubTipster: "11.00",
          drawTipster: "5.00",
          awayClubTipster: "2.00",
          sportLogo: require("./assets/league.svg"),
          backgroundImage: String,
          isLive: false,
          liveScore: "",
        },
        {
          homeClubLogo: require("./assets/real.png"),
          homeClubName: "Real Madrid",
          matchTime: "1 st Half 34:45",
          awayClubLogo: require("./assets/chelsea.svg"),
          awayClubName: "Chelsea",
          homeClubTipster: "11.00",
          drawTipster: "5.00",
          awayClubTipster: "2.00",
          sportLogo: require("./assets/europe.png"),
          backgroundImage: require("./assets/live-banner.png"),
          isLive: true,
          liveScore: "1:2",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
li:last-child {
  filter: brightness(0.2) opacity(0.8);
}
@media screen and (max-width: 1074px) {
  li:nth-child(3) {
    filter: brightness(0.2) opacity(0.8);
  }
}
</style>
