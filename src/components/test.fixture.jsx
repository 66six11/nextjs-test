import PixelArtistCard from "./PixelArtisCard.fixture";


const TestFixture = () => {
  return (
    <div class="flex justify-center items-center w-full h-screen">
      <PixelArtistCard
        name="John Doe"
        image="\next.svg"
        link="https://i2.imgs.ovh/d/BQACAgEAAx0EUvSR8wACHQxmt4L-iqh_JYeNxiYUE8bp_p5jJwACrQQAAn1KwEWaDE9VpRcC-jUE"
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
    </div>
  );
};

export default TestFixture;
