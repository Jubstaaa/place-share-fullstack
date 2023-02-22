import React, { useState } from "react";
import Card from "../../../components/UIElements/Card";
import Button from "../../../components/FormElements/Button";
import Modal from "../../../components/UIElements/Modal";
import Map from "../../../components/UIElements/Map";

function PlaceItem({ item }) {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={item.address}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="h-80 w-full">
          <Map center={item.location} zoom={16} />
        </div>
      </Modal>
      <li className="my-4">
        <Card>
          <div className="w-full h-48 mr-6 md:h-80">
            <img
              className="w-full h-full object-cover"
              src={item.imageUrl}
              alt={item.title}
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="mb-2">{item.title}</h2>
            <h3 className="mb-2">{item.address}</h3>
            <p className="mb-2">{item.description}</p>
          </div>
          <div className="p-4 text-center border border-[#ccc]">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${item.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
