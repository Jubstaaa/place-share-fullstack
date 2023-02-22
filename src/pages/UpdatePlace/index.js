import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/FormElements/Input";
import Button from "../../components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../util/validators";

const places = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

function UpdatePlace() {
  const placeId = useParams().placeId;
  const identifiedPlace = places.find((place) => place.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="text-center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className="relative mx-auto p-4 w-11/12 max-w-2xl shadow-md rounded-md bg-white">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        EDIT PLACE
      </Button>
    </form>
  );
}

export default UpdatePlace;
