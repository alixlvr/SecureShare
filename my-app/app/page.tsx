import React from "react";
import Tab from "@mui/material/Tab";
import Image from "next/image";
import Button from "@mui/material/Button";

export default function Home() {
  return (
      <div className="bg-box rounded-lg text-text-color justify-between">
          <div className="flex p-3 justify-center cursor-pointer">
              <Tab label="Chiffrement"/>
              <Tab label="Déchiffrement"/>
          </div>
          <div className="flex justify-center items-center space-x-10">
              <Image src={"/number_one.png"} alt={"icone un"} width={20} height={20}/>
              <div>Choix du fichier</div>
              <Image src={"/number_two.png"} alt={"icone deux"} width={20} height={20}/>
              <div>Choix du chiffrement</div>
              <Image src={"/number_three.png"} alt={"icone trois"} width={20} height={20}/>
              <div>Récupérez votre fichier</div>
          </div>
          <div className="justify-center">
              <div className="p-6">
                <span>
                    Cherchez votre fichier localement sur votre ordinateur
                </span>
              </div>
              <div className="items-center">
                  <Button variant="contained">
                      CHERCHER
                  </Button>
              </div>
          </div>
      </div>
  );
}
