import { Mission, TitreDeSejour } from './frame';

export const verify = (mission: Mission, titres: TitreDeSejour[]) => { 
    // vérifier pour chaque jour de la mission
    for (let d = new Date(mission.dateStart.getTime()); d <= mission.dateEnd; d.setDate(d.getDate() + 1)) {
        let dayIsValid = false;
        for (let titre of titres) {
            // un des titres valide le jour
            if (isDayValidatedByTitre(titre, d)) { dayIsValid = true; break; }
        }
        // le jour n'a été validé par aucun des titres
        if (!dayIsValid) { return false; }
    }
    // tous les jours on été validé par un titre
    return true;
};

/**
 * vérifie que la date est comprise entre les bornes du titre
 * @param titre 
 * @param date 
 * @returns {boolean}
 */
const isDayValidatedByTitre = (titre: TitreDeSejour, date: Date): boolean => {
    return date.getTime() >= titre.dateStart.getTime() && date.getTime() <= titre.dateEnd.getTime();
};
