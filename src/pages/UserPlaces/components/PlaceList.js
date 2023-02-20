import React from "react";
import { Link } from "react-router-dom";
import PlaceItem from "./PlaceItem";
import Card from "../../../components/UIElements/Card";

function PlaceList({ places }) {
  return (
    <>
      {places.length === 0 ? (
        <Card>
          <div className="placeList text-center">
            <h2>No places found. Maybe create one?</h2>
            <button>Share Place</button>
          </div>
        </Card>
      ) : (
        <ul className="placeList">
          {places.map((place) => (
            <PlaceItem key={place.id} item={place} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PlaceList;
