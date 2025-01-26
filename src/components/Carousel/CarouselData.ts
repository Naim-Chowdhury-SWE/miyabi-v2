import images from "../../data/imageData";

type ImageDataItem = {
  image: string;
  description: string;
};

// Define the type for the imageData object with an index signature
type ImageData = {
  [key: string]: ImageDataItem;
};

const imageData: ImageData = {
  image1: {
    image: images.PappaLyx,
    description: "Pappa Lyx",
  },
  image2: {
    image: images.BibimbapEntrecote,
    description: "Bimbimbap",
  },
  image3: {
    image: images.GrillLaxSushi,
    description: "Grill Lax Sushi",
  },
  image4: {
    image: images.CrispyTempuraRoll,
    description: "Crispy Tempura Roll",
  },
  image5: {
    image: images.PokebowlLax,
    description: "Pokebowl",
  },
  image6: {
    image: images.BentoDeluxe,
    description: "Bento Deluxe",
  },
  image7: {
    image: images.StektRisKyckling,
    description: "Stekt Ris",
  },
  image8: {
    image: images.Karaage,
    description: "Karaage",
  },
};
export default imageData;
