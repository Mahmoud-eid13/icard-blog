import styled from "styled-components";

const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 1180px;
  height: 788px;
  margin: auto;
  img {
    width: 1180px;
    height: 597px;
    top: 325px;
    left: 130px;
    border-radius: 24px;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }
  span h3 {
    width: 255px;
    height: 40px;
    top: 138px;
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 40.32px;
    text-align: center;
    color: #999999;
  }
  span p {
    width: 240px;
    height: 48px;
    color: #f39425;
    border-radius: 32px;
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 40.32px;
    text-align: center;
    background-color: #ffebd4;
  }
  h1 {
    font-family: Cairo;
    font-size: 3rem;
    font-weight: 700;
    line-height: 80.64px;
    text-align: center;
  }
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 50px auto;
  width: 1180px;
  height: 3091px;
  border-radius: 24px;
  p {
    font-family: Cairo;
    font-size: 2rem;
    font-weight: 600;
    line-height: 53.76px;
    text-align: left;
  }
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span img {
    width: 580px;
    height: 360px;

    border-radius: 24px;
  }
`;
const List = styled.ol`
  li {
    font-family: Cairo;
    font-size: 2rem;
    font-weight: 700;
    line-height: 53.76px;
    text-align: left;
  }
  li p {
    font-family: Cairo;
    font-size: 2rem;
    font-weight: 600;
    line-height: 53.76px;
    text-align: left;
  }
`;

const Second = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 1180px;
  height: 428px;
  border-radius: 8px;
  h3 {
    font-family: Cairo;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 67.2px;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  width: 1180px;
  justify-content: space-between;
`;

const Last = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 380px;
    height: 200px;
    border-radius: 8px;
  }
  span {
    font-family: Cairo;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 40.32px;
    text-align: center;
    color: #999999;
  }
  h4 {
    font-family: Cairo;
    font-size: 2rem;
    font-weight: 700;
    line-height: 53.76px;
    text-align: center;
  }
`;

function ProductBody() {
  return (
    <>
      <First>
        <span>
          <p>Recently Added</p>
          <h3>iCard team | 26/06/2024</h3>
        </span>
        <h1>Fortnite : Tips for Begginers</h1>
        <img src="../images/Rectangle 5.png" alt="Fortnite" />
      </First>
      <Article>
        <p>
          Welcome to the island, aspiring Fortnite player! Whether you’re a
          seasoned gamer or a complete newbie, understanding the basics is
          crucial for survival. In this guide, we’ll break down essential tips
          and tricks to help you navigate the battle royale chaos. From looting
          to building, storm management to weapon selection, consider this your
          crash course in Fortnite fundamentals. So, hop aboard the battle bus,
          thank the driver, and let’s dive into the action!
        </p>
        <span>
          <img src="../images/Rectangle 10.png" alt="first" />
          <img src="../images/Rectangle 11.png" alt="second" />
        </span>
        <List>
          <li>
            Spawn Island Practice:
            <p>
              When you spawn on Spawn Island, you’ll see guns, ammo, and
              building materials scattered around. However, these won’t come
              with you into the actual Fortnite map. Treat Spawn Island as a
              practice area to get familiar with controls and mechanics. You can
              shoot opponents there, but the guns won’t do any damage.
            </p>
          </li>
          <li>
            Collect and Construct:
            <p>
              Gather resources (wood, stone, and metal) by breaking down
              structures and objects. These materials are crucial for building
              defenses and structures during battles on the main island.
            </p>
          </li>
          <li>
            Learn Where Chests Spawn:
            <p>
              Chests contain valuable loot. They spawn in specific locations
              across the map. Keep an eye out for them during your drop and
              landing phase.
            </p>
          </li>
          <li>
            Be Aware of the Storm:
            <p>
              The storm shrinks the playable area over time. Always check your
              map to see where the storm is moving. Being caught outside the
              safe zone can be deadly.
            </p>
          </li>
          <li>
            Weapon Rarity Matters:
            <p>
              Weapons come in different rarities (common, uncommon, rare, epic,
              and legendary). Higher rarity usually means better stats.
              Prioritize rarer weapons when you find them.
            </p>
          </li>
          <li>
            Master Building and Editing:
            <p>
              Building is a core skill in Fortnite. Learn to build walls, ramps,
              and floors quickly. Editing structures allows you to create
              openings or escape routes during fights.
            </p>
          </li>
          <li>
            Stay Inside the Circle:
            <p>
              As the storm shrinks, move toward the safe zone. Avoid getting
              caught outside the circle, especially in the later stages of the
              game.
            </p>
          </li>
          <li>
            Group Up With Teammates:
            <p>
              If you’re playing in squads or duos, communicate with your
              teammates. Stick together, share resources, and coordinate
              attacks.
            </p>
          </li>
          <li>
            Use Visualize Sound Effects:
            <p>
              Enable this feature in settings. It shows visual indicators for
              nearby sounds (like footsteps or gunfire), helping you stay aware
              of your surroundings.
            </p>
          </li>
        </List>
        <p>
          Remember, Fortnite is about having fun, so enjoy the journey, adapt
          your strategies, and aim for that Victory Royale!
        </p>
      </Article>
      <Second>
        <h3>You may also like</h3>
        <Section>
          <Last>
            <img src="../images/Rectangle 12.png" alt="third" />
            <h4>Best Fortnite Skins So Far</h4>
            <span>iCard team | 11/05/2024</span>
          </Last>
          <Last>
            <img src="../images/Rectangle 14.png" alt="forth" />
            <h4>Epic Games</h4>
            <span>iCard team | 11/05/2024</span>
          </Last>
          <Last>
            <img src="../images/Rectangle 13.png" alt="fifth" />
            <h4>Fortnite’s OG Season</h4>
            <span>iCard team | 11/05/2024</span>
          </Last>
        </Section>
      </Second>
    </>
  );
}

export default ProductBody;
