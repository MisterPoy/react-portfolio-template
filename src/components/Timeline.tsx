import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Expériences</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="05/2024 - Aujourd'hui"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Étudiant Intégrateur web
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              OpenClassrooms, France
            </h4>
            <p>
              En cours,
              <br />
              Formation intensive d'Intégrateur Web chez OpenClassrooms, visant
              l'obtention d'un diplôme de niveau 5 (bac +2) à travers 12 projets
              professionnalisants.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Octobre 2021 - Avril 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chauffeur livreur
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              SDGC - Biguglia, Corse
            </h4>
            <p>
              - Capacité à planifier efficacement des itinéraires et à optimiser
              les tournées
              <br />- Gestion des stocks, suivi et optimisation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Octobre 2018 - Octobre 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ambulancier</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ambulances de la Marana - Lucciana, Corse
            </h4>
            <p>
              - Transport et prise en charge des patients, y compris en
              situations d'urgence
              <br />
              - Gestion du stress et communication efficace en équipe
              <br />- Maintenance des véhicules et du matériel médical
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juillet 2018 - Septembre 2018"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ambulancier</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Ambulances MATELLI - Bastia, Corse
            </h4>
            <p>
              Équipe de Garde Préfectorale
              <br />
              - Intervention rapide en situations d'urgence
              <br />
              - Collaboration étroite avec les services de secours et les
              hôpitaux
              <br />- Gestion administrative et rédaction de rapports
              d'intervention
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Août 2012 - sept 2016"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Conseiller clients
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              3Ccom - Furiani, Corse
            </h4>
            <p>
              B2B - B2C
              <br />
              - Service client, et vente par téléphone
              <br />
              - Développement de compétences en communication et négociation
              <br />
              - Gestion de base de données clients et suivi des dossiers
              <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
