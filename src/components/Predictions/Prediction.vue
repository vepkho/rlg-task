<script>
export default {
  props: {
    homeClubLogo: String,
    homeClubName: String,
    matchTime: String,
    awayClubLogo: String,
    awayClubName: String,
    homeClubTipster: String,
    drawTipster: String,
    awayClubTipster: String,
    sportLogo: String,
    backgroundImage: String,
    isLive: Boolean,
    liveScore: String,
    isSelected: Boolean,
  },
};
</script>

<template>
  <div class="container">
    <div
      class="prediction"
      v-if="backgroundImage"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="details">
        <div class="club">
          <img :src="homeClubLogo" :alt="homeClubName" />
          <div class="club-name">{{ homeClubName }}</div>
        </div>
        <div class="calendar">
          <p v-if="isLive" class="live-score">{{ liveScore }}</p>
          <div class="schedule">
            <p v-if="!isLive" class="vs">VS</p>
            <p class="match-time">{{ matchTime }}</p>
          </div>
          <div class="sport">
            <img :src="sportLogo" alt="sport logo" />
          </div>
        </div>
        <div class="club">
          <img :src="awayClubLogo" :alt="awayClubName" />
          <div class="club-name">{{ awayClubName }}</div>
        </div>
      </div>
    </div>
    <div class="bets">
      <div class="home block" :class="{ live: isLive, selected: isSelected }">
        <p>1</p>
        <p class="tipster">{{ homeClubTipster }}</p>
      </div>
      <div class="draw block" :class="{ live: isLive }">
        <p>X</p>
        <p class="tipster">{{ drawTipster }}</p>
      </div>
      <div class="away block" :class="{ live: isLive }">
        <p>2</p>
        <p class="tipster">{{ awayClubTipster }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 72px auto 32px auto;

  .prediction {
    width: 340px;
    height: 148px;
    border-radius: 20px 20px 0px 0px;
    background: #16181d;

    .details {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 38px 48px;

      .club {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 21px;

        img {
          width: 42px;
          height: 42px;
        }

        &-name {
          color: #f0f0f0;
          font-family: "Montserrat Variable", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
      }

      .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .live-score {
          color: #f29c1f;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        .schedule {
          display: flex;
          flex-direction: column;
          text-align: center;

          .vs {
            color: #f0f0f0;
            font-family: "Poppins", sans-serif;
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }

          .match-time {
            color: #f0f0f0;
            font-family: "Poppins", sans-serif;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding-top: 16px;
          }
        }

        .sport {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #0f1010;
          margin-top: 21px;

          img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }
  }

  .bets {
    display: flex;
    gap: 1px;
    width: 340px;
    height: 32px;
    border-radius: 0 0 4px 4px;

    .block {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 9px;
      width: 100%;
      background: #0f1010;
      border-radius: 0 0 4px 4px;

      p {
        color: #f0f0f0;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .tipster {
        color: #f0f0f0;
        font-family: "Poppins", sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }

    .live {
      background-color: #16181d;
    }

    .selected {
      background: #f29c1f;

      p,
      .tipster {
        color: #0f1010;
      }
    }
  }
}
</style>
