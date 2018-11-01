(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{168:function(e,t,_){"use strict";_.r(t);var n=_(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"schema-de-donnees"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#schema-de-donnees","aria-hidden":"true"}},[e._v("#")]),e._v(" Schéma de données")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/entrepreneur-interet-general/predisauvetage/master/opendata/uml/uml.png",alt:"Schéma UML des tables",title:"Schéma UML des tables"}})]),e._v(" "),_("p",[e._v("Le schéma ci-dessus fait apparaitre les différentes tables représentant le modèle de données du jeu de données SECMAR.\nDes tableaux détaillant tous les fichiers et toutes leurs colonnes respectives est disponible ci-dessous.")]),e._v(" "),_("h2",{attrs:{id:"operations"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#operations","aria-hidden":"true"}},[e._v("#")]),e._v(" operations")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Colonne")]),e._v(" "),_("th",[e._v("Type")]),e._v(" "),_("th",[e._v("Description")]),e._v(" "),_("th",[e._v("Exemple")]),e._v(" "),_("th",[e._v("Propriétés")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("operation_id")]),e._v(" "),_("td",[e._v("integer($int64)")]),e._v(" "),_("td",[e._v("Le numéro unique de l'opération.")]),e._v(" "),_("td",[e._v("1119920371")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("type_operation")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Le type d'opération coordonné par le CROSS. SAR (search and rescue) : vie humaine en danger ; MAS (maritime assistance service) : assistance aux navires ; SUR : sûreté des navires ; DIV : autres cas.")]),e._v(" "),_("td",[e._v("SAR")]),e._v(" "),_("td",[e._v("enum: SAR, MAS, DIV, SUR"),_("br"),e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("pourquoi_alerte")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Pourquoi l'alerte a-t-elle été donnée")]),e._v(" "),_("td",[e._v("Événement reconnu")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("moyen_alerte")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Comment l'alerte a-t-elle été donnée")]),e._v(" "),_("td",[e._v("Téléphone mobile à terre")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("qui_alerte")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Qui a donné l'alerte")]),e._v(" "),_("td",[e._v("Loueur de bateaux")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("categorie_qui_alerte")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Catégorie du lanceur d'alerte")]),e._v(" "),_("td",[e._v("Autorité maritime française à terre")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("cross")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("CROSS en charge de la coordination de l'opération")]),e._v(" "),_("td",[e._v("Gris-Nez")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("departement")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Département où se déroule l'opération")]),e._v(" "),_("td",[e._v("Seine-Maritime")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("est_metropolitain")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule en France métropolitaine")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("evenement")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Évenement qui a donné lieu à l'opération")]),e._v(" "),_("td",[e._v("Rupture de mouillage")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("categorie_evenement")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Catégorie de l'événement ayant donné lieu à l'opération")]),e._v(" "),_("td",[e._v("Accidents individuels à personnes embarquées")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("autorite")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Autorité en charge de la coordination de l'opération")]),e._v(" "),_("td",[e._v("Préfet maritime")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("seconde_autorite")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Seconde autorité en charge de la coordination de l'opération")]),e._v(" "),_("td",[e._v("MRCC étranger")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("zone_responsabilite")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Où se situe l'intervention")]),e._v(" "),_("td",[e._v("Port et accès")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("latitude")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("Latitude de l'opération au format EPSG:4326 WGS84")]),e._v(" "),_("td",[e._v("48.3977")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("longitude")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("Longitude de l'opération au format EPSG:4326 WGS84")]),e._v(" "),_("td",[e._v("-4.955")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("vent_direction")]),e._v(" "),_("td",[e._v("number($int32)")]),e._v(" "),_("td",[e._v("Direction du vent, en degrés")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("nullable: True"),_("br"),e._v("minimum: 0"),_("br"),e._v("maximum: 360")])]),e._v(" "),_("tr",[_("td",[e._v("vent_direction_categorie")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Nom de la direction du vent. La direction nord-est est par exemple comprise entre 22,5 degrés et 67,5 degrés.")]),e._v(" "),_("td",[e._v("nord")]),e._v(" "),_("td",[e._v("nullable: True"),_("br"),e._v("enum: nord, nord-est, est, sud-est, sud, sud-ouest, ouest, nord-ouest")])]),e._v(" "),_("tr",[_("td",[e._v("vent_force")]),e._v(" "),_("td",[e._v("number($int32)")]),e._v(" "),_("td",[e._v("Force du vent selon l'échelle de Beaufort")]),e._v(" "),_("td",[e._v("3")]),e._v(" "),_("td",[e._v("nullable: True"),_("br"),e._v("minimum: 0"),_("br"),e._v("maximum: 12")])]),e._v(" "),_("tr",[_("td",[e._v("mer_force")]),e._v(" "),_("td",[e._v("number($int32)")]),e._v(" "),_("td",[e._v("État de la mer selon l'échelle de Douglas")]),e._v(" "),_("td",[e._v("3")]),e._v(" "),_("td",[e._v("nullable: True"),_("br"),e._v("minimum: 0"),_("br"),e._v("maximum: 9")])]),e._v(" "),_("tr",[_("td",[e._v("date_heure_reception_alerte")]),e._v(" "),_("td",[e._v("string($date-time)")]),e._v(" "),_("td",[e._v("Date et heure de réception de l'alerte en UTC au format ISO8601")]),e._v(" "),_("td",[e._v("1992-12-06T15:07:00Z")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("date_heure_fin_operation")]),e._v(" "),_("td",[e._v("string($date-time)")]),e._v(" "),_("td",[e._v("Date et heure de fin de l'opération en UTC au format ISO8601")]),e._v(" "),_("td",[e._v("1992-12-06T15:07:00Z")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("numero_sitrep")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Numéro de situation report. Les numéros de SITREP sont remis à 0 tous les ans au 1er janvier 0h UTC et la numérotation est incrémentale par la suite. La numérotation des SITREP est indépendante pour chaque CROSS.")]),e._v(" "),_("td",[e._v("17")]),e._v(" "),_("td",[e._v("minimum: 1")])]),e._v(" "),_("tr",[_("td",[e._v("cross_sitrep")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Identifiant unique de l'opération. Il est composé du CROSS coordinateur de l'opération, de l'année et du numéro de SITREP")]),e._v(" "),_("td",[e._v("Corsen 2017/42")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("fuseau_horaire")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Fuseau horaire du CROSS coordonnant l'opération. Le fuseau horaire correspond à la timezone database de l'IANA")]),e._v(" "),_("td",[e._v("Europe/Paris")]),e._v(" "),_("td")])])]),e._v(" "),_("h2",{attrs:{id:"resultats-humain"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#resultats-humain","aria-hidden":"true"}},[e._v("#")]),e._v(" resultats_humain")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Colonne")]),e._v(" "),_("th",[e._v("Type")]),e._v(" "),_("th",[e._v("Description")]),e._v(" "),_("th",[e._v("Exemple")]),e._v(" "),_("th",[e._v("Propriétés")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("operation_id")]),e._v(" "),_("td",[e._v("integer($int64)")]),e._v(" "),_("td",[e._v("Le numéro unique de l'opération.")]),e._v(" "),_("td",[e._v("1119920371")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("categorie_personne")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Indique la catégorie de personne impliquée dans le bilan humain")]),e._v(" "),_("td",[e._v("Pêcheur français")]),e._v(" "),_("td",[e._v("enum: Autre, Plaisancier français, Clandestin, Pêcheur français, Commerce français, Marin étranger, Toutes catégories")])]),e._v(" "),_("tr",[_("td",[e._v("resultat_humain")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Description du bilan humain")]),e._v(" "),_("td",[e._v("Personne secourue")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("nombre")]),e._v(" "),_("td",[e._v("number($int32)")]),e._v(" "),_("td",[e._v("Nombre de personnes impliquées dans ce bilan")]),e._v(" "),_("td",[e._v("3")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("dont_nombre_blesse")]),e._v(" "),_("td",[e._v("number($int32)")]),e._v(" "),_("td",[e._v("Indique le nombre de personnes blessées dans le bilan")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])])])]),e._v(" "),_("h2",{attrs:{id:"flotteurs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flotteurs","aria-hidden":"true"}},[e._v("#")]),e._v(" flotteurs")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Colonne")]),e._v(" "),_("th",[e._v("Type")]),e._v(" "),_("th",[e._v("Description")]),e._v(" "),_("th",[e._v("Exemple")]),e._v(" "),_("th",[e._v("Propriétés")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("operation_id")]),e._v(" "),_("td",[e._v("integer($int64)")]),e._v(" "),_("td",[e._v("Le numéro unique de l'opération.")]),e._v(" "),_("td",[e._v("1119920371")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("numero_ordre")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Indique l'ordre d'implication des flotteurs. Le premier flotteur impliqué est numéroté 1, le suivant 2 etc.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("pavillon")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Indique si le pavillon du flotteur impliqué est français ou étranger")]),e._v(" "),_("td",[e._v("Français")]),e._v(" "),_("td",[e._v("enum: Étranger, Français"),_("br"),e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("resultat_flotteur")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("État du flotteur à la fin de l'intervention")]),e._v(" "),_("td",[e._v("Remorqué")]),e._v(" "),_("td",[e._v("enum: Assisté, Côte rejointe par ses propres moyens, Difficulté surmontée, reprise de route, Non assisté, cas de fausse alerte, Non renseigné, Perdu / Coulé, Remorqué, Retrouvé après recherche, Échoué")])]),e._v(" "),_("tr",[_("td",[e._v("type_flotteur")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Indique le type précis du flotteur")]),e._v(" "),_("td",[e._v("Planche à voile")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("categorie_flotteur")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Grande catégorie à laquelle appartient le flotteur")]),e._v(" "),_("td",[e._v("Plaisance")]),e._v(" "),_("td",[e._v("enum: Commerce, Pêche, Plaisance, Loisir nautique, Aéronef, Autre")])]),e._v(" "),_("tr",[_("td",[e._v("numero_immatriculation")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Numéro d'immatriculation du navire. Cette donnée est chiffrée et ne correspond pas à l'immatriculation originale du navire.")]),e._v(" "),_("td",[e._v("0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33")]),e._v(" "),_("td",[e._v("nullable: True")])])])]),e._v(" "),_("h2",{attrs:{id:"operations-stats"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#operations-stats","aria-hidden":"true"}},[e._v("#")]),e._v(" operations_stats")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("Colonne")]),e._v(" "),_("th",[e._v("Type")]),e._v(" "),_("th",[e._v("Description")]),e._v(" "),_("th",[e._v("Exemple")]),e._v(" "),_("th",[e._v("Propriétés")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("operation_id")]),e._v(" "),_("td",[e._v("integer($int64)")]),e._v(" "),_("td",[e._v("Le numéro unique de l'opération.")]),e._v(" "),_("td",[e._v("1119920371")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("date")]),e._v(" "),_("td",[e._v("string($date)")]),e._v(" "),_("td",[e._v("La date de l'opération. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("2012-12-27")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("annee")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("L'année de l'opération. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("2012")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("mois")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le mois de l'opération. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("3")]),e._v(" "),_("td",[e._v("minimum: 1"),_("br"),e._v("maximum: 12")])]),e._v(" "),_("tr",[_("td",[e._v("jour")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le jour de l'opération. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("13")]),e._v(" "),_("td",[e._v("minimum: 1"),_("br"),e._v("maximum: 31")])]),e._v(" "),_("tr",[_("td",[e._v("mois_texte")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Le mois de l'opération en français. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("Septembre")]),e._v(" "),_("td",[e._v("enum: Janvier, Février, Mars, Avril, Mai, Juin, Juillet, Août, Septembre, Octobre, Novembre, Décembre")])]),e._v(" "),_("tr",[_("td",[e._v("semaine")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("La semaine de l'opération, au format ISO8601. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("22")]),e._v(" "),_("td",[e._v("minimum: 1"),_("br"),e._v("maximum: 53")])]),e._v(" "),_("tr",[_("td",[e._v("annee_semaine")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("La semaine et l'année de l'opération, au format ISO8601. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("2018-22")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("jour_semaine")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Le jour de la semaine de l'opération en français. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("Lundi")]),e._v(" "),_("td",[e._v("enum: Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche")])]),e._v(" "),_("tr",[_("td",[e._v("est_weekend")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule pendant un week-end. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur. L'opération se déroule durant le week-end si elle débute un samedi ou un dimanche.")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("est_jour_ferie")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule pendant un jour férié. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur.")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("est_vacances_scolaires")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule pendant des vacances scolaires en zone A, B ou C. La date de référence est la date de réception de l'alerte au fuseau horaire du CROSS coordinateur. Quand le calendrier des vacances scolaires n'est pas connu, la donnée n'est pas renseignée.")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("phase_journee")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Indique à quel moment de la journée l'opération se déroule. La date de référence est la date de réception de l'alerte en UTC qui tient compte de l'heure locale du CROSS coordonnant l'opérateur. Définitions : la nuit est entre le coucher du soleil et le lever du soleil, la matinée du lever du soleil jusqu'à 11:59, le déjeuner entre 12:00 et 13:59 et l'après-midi de 14:00 jusqu'au coucher du soleil.")]),e._v(" "),_("td",[e._v("nuit")]),e._v(" "),_("td",[e._v("enum: matinée, déjeuner, après-midi, nuit"),_("br"),e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("concerne_plongee")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si cette opération est une opération qui concerne une activité de plongée (bouteille ou apnée) ou de chasse sous-marine")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("distance_cote_metres")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("La distance entre la plus proche côte ou frontière terrestre en territoire français en mètres. Cette distance peut être égale à 0 si l'opération se déroule très près des côtes ou à l'intérieur des terres en cas de fausse alerte. La distance peut être très élevée lors d'un déclenchement d'une balise par erreur ou en cas de coordination d'une opération impliquant un flotteur français en eaux internationales.")]),e._v(" "),_("td",[e._v("12300")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("distance_cote_milles_nautiques")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("La distance entre la plus proche côte ou frontière terrestre en territoire français en milles nautiques. Cette distance peut être égale à 0 si l'opération se déroule très près des côtes ou à l'intérieur des terres en cas de fausse alerte. La distance peut être très élevée lors d'un déclenchement d'une balise par erreur ou en cas de coordination d'une opération impliquant un flotteur français en eaux internationales.")]),e._v(" "),_("td",[e._v("1.52")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("est_dans_stm")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule dans la zone d'un service de trafic maritime où une veille est renforcée.")]),e._v(" "),_("td",[e._v("False")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("nom_stm")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Si l'opération se déroule dans une zone d'un service de trafic maritime, le nom de cette zone.")]),e._v(" "),_("td",[e._v("stm-corsen")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("est_dans_dst")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si l'opération se déroule dans une zone d'un dispositif de séparation du trafic.")]),e._v(" "),_("td",[e._v("False")]),e._v(" "),_("td")]),e._v(" "),_("tr",[_("td",[e._v("nom_dst")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Si l'opération se déroule dans une zone d'un dispositif de séparation du trafic, le nom de cette zone.")]),e._v(" "),_("td",[e._v("dst-dover")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("maree_port")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Le nom du port utilisé comme référence pour connaitre le coefficient moyen de marée de la journée de l'opération. Les marées sont renseignées pour les opérations coordonnées par les CROSS en Atlantique et Manche, lorsque l'opération est géolocalisée et que celle-ci se trouve à moins de 20 kilomètres de la plus proche côte.")]),e._v(" "),_("td",[e._v("Dieppe")]),e._v(" "),_("td",[e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("maree_coefficient")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le coefficient moyen de marée de la journée de l'opération. Les marées sont renseignées pour les opérations coordonnées par les CROSS en Atlantique et Manche, lorsque l'opération est géolocalisée et que celle-ci se trouve à moins de 20 kilomètres de la plus proche côte.")]),e._v(" "),_("td",[e._v("70")]),e._v(" "),_("td",[e._v("nullable: True"),_("br"),e._v("minimum: 20"),_("br"),e._v("maximum: 120")])]),e._v(" "),_("tr",[_("td",[e._v("maree_categorie")]),e._v(" "),_("td",[e._v("string")]),e._v(" "),_("td",[e._v("Le nom de la catégorie de la marée pour l'opération.")]),e._v(" "),_("td",[e._v("96-120")]),e._v(" "),_("td",[e._v("enum: 20-45, 46-70, 71-95, 96-120"),_("br"),e._v("nullable: True")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_blessees")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes blessées lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_assistees")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes assistées lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées lors de l'opération. Cette colonne n'est plus utilisée depuis décembre 2009 où la notion de décès a été séparée entre cause accidentelle ("),_("code",[e._v("nombre_personnes_decedees_accidentellement")]),e._v(") et cause naturelle ("),_("code",[e._v("nombre_personnes_decedees_naturellement")]),e._v(").")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees_accidentellement")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées accidentellement lors de l'opération. Cette colonne n'est renseignée que depuis les années 2009, auparavant tous les décès étaient comptés dans la colonne "),_("code",[e._v("nombre_personnes_decedees")]),e._v(".")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees_naturellement")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées naturellement lors de l'opération. Cette colonne n'est renseignée que depuis les années 2009, auparavant tous les décès étaient comptés dans la colonne "),_("code",[e._v("nombre_personnes_decedees")]),e._v(".")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_disparues")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes disparues lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_impliquees_dans_fausse_alerte")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes impliquées dans une fausse alerte lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_retrouvees")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes retrouvées lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_secourues")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes secourues lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tirees_daffaire_seule")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes tirées d'affaire seule lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tous_deces")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées (qu'importe la cause) lors de l'opération. Cette colonne fait la somme des colonnes "),_("code",[e._v("nombre_personnes_decedees")]),e._v(", "),_("code",[e._v("nombre_personnes_decedees_naturellement")]),e._v(" et "),_("code",[e._v("nombre_personnes_decedees_accidentellement")]),e._v(" pour assurer une valeur entre 1985 et maintenant, suite à la séparation de la colonne "),_("code",[e._v("nombre_personnes_decedees")]),e._v(" en 2009.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tous_deces_ou_disparues")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées (qu'importe la cause) et le nombre de personnes disparues lors de l'opération. Voir la documentation de la colonne "),_("code",[e._v("nombre_personnes_tous_deces")]),e._v(" pour comprendre le périmètre du dénombrement des personnes décédées.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_impliquees")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes impliquées lors de l'opération.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_blessees_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes blessées lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_assistees_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes assistées lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees_accidentellement_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées accidentellement lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_decedees_naturellement_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées naturellement lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_disparues_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes disparues lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_impliquees_dans_fausse_alerte_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes impliquées dans une fausse alerte lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_retrouvees_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes retrouvées lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_secourues_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes secourues lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tirees_daffaire_seule_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes tirées d'affaire seule lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tous_deces_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées (qu'importe la cause) lors de l'opération, sans prendre en compte les clandestins. Voir la documentation de la colonne "),_("code",[e._v("nombre_personnes_tous_deces")]),e._v(" pour comprendre le périmètre du dénombrement des personnes décédées.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_tous_deces_ou_disparues_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes décédées (qu'importe la cause) et le nombre de personnes disparues lors de l'opération, sans prendre en compte les clandestins. Voir la documentation de la colonne "),_("code",[e._v("nombre_personnes_tous_deces")]),e._v(" pour comprendre le périmètre du dénombrement des personnes décédées.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_personnes_impliquees_sans_clandestins")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre total de personnes impliquées lors de l'opération, sans prendre en compte les clandestins.")]),e._v(" "),_("td",[e._v("42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("duree_engagement_moyens_nautiques_heures")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("La durée totale d'engagement en heures de moyens nautiques lors de l'opération.")]),e._v(" "),_("td",[e._v("2.42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("duree_engagement_moyens_terrestres_heures")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("La durée totale d'engagement en heures de moyens terrestres lors de l'opération.")]),e._v(" "),_("td",[e._v("2.42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("duree_engagement_moyens_aeriens_heures")]),e._v(" "),_("td",[e._v("number($float)")]),e._v(" "),_("td",[e._v("La durée totale d'engagement en heures de moyens aériens lors de l'opération.")]),e._v(" "),_("td",[e._v("2.42")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_commerce_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de commerce impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_peche_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de pêche impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_plaisance_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de plaisance impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_loisirs_nautiques_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de loisirs nautiques impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_aeronefs_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre d'aéronefs impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_autre_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs non catégorisés impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_annexe_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre d'annexes impliquées dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_autre_loisir_nautique_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de loisir nautique non déterminé impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_canoe_kayak_aviron_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de canoë / kayak / aviron impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_engin_de_plage_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre d'engins de plage impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_kitesurf_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de kitesurfs impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_plaisance_voile_legere_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de plaisance à voile légère impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_plaisance_a_moteur_moins_8m_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de plaisance à moteur de moins de 8 mètres dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_plaisance_a_moteur_plus_8m_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de plaisance à moteur de plus de 8 mètres impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_plaisance_a_voile_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de flotteurs de plaisance à voile impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_planche_a_voile_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de planches à voile impliquées dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_ski_nautique_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de skis nautiques impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_surf_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de surfs impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("nombre_flotteurs_vehicule_nautique_a_moteur_impliques")]),e._v(" "),_("td",[e._v("integer($int32)")]),e._v(" "),_("td",[e._v("Le nombre de véhicules nautique à moteur (jetski, scooter des mer, moto des mers etc.) impliqués dans l'opération.")]),e._v(" "),_("td",[e._v("1")]),e._v(" "),_("td",[e._v("minimum: 0")])]),e._v(" "),_("tr",[_("td",[e._v("sans_flotteur_implique")]),e._v(" "),_("td",[e._v("boolean")]),e._v(" "),_("td",[e._v("Indique si aucun flotteur n'est impliqué dans cette opération.")]),e._v(" "),_("td",[e._v("True")]),e._v(" "),_("td")])])])])}],!1,null,null,null);r.options.__file="schema.md";t.default=r.exports}}]);