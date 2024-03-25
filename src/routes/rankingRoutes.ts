import { Router } from "express";
import gameController from "../controllers/gameController"; // Importem el controlador de jocs
import rankingController from "../controllers/rankingController.";

// Creem una nova instància del router d'Express
const router = Router(); 
// Definim les rutes per a les operacions relacionades amb el ranking

// Ruta per obtenir el ranking de tots els jugadors 
router.get("/", rankingController.getRanking); 

// Ruta per obtenir el jugador amb pitjor percentatge
router.get("/loser", rankingController.getLoser);

// Ruta per obtenir el jugador amb millor percentatge
router.get("/winner", rankingController.getWinner);

// Exportem el router perquè pugui ser utilitzat en altres parts de l'aplicació
export default router; 