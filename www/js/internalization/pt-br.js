(function() {
  'use strict';

  angular.module('mtgx').config(portugues);

  function portugues($translateProvider) {

       $translateProvider.translations('pt-br', {
         LANGUAGE: "Português",
         LANGUAGE_LABEL: "Idioma de preferência",
         MENU_MESSAGE: "Seja Bem Vindo",
         VIEW_TITLE_SIMPLE_SEARCH: "Busca Simples",
         CARD_NAME: "Nome da Carta",
         CARD_TYPE: "Tipo",
         CARD_SUBTYPE: "Subtipo",
         CARD_TEXT: "Texto",
         RARITY: "Raridade",
         FORMAT: "Formato",
         ANY: "Qualquer",
         UNCOMMOM: "Incomun",
         COMMOM: "Comum",
         RARE: "Raro",
         MYTHIC: "Mítico",
         BLOCK: "Bloco",
         COMMANDER: "Commander",
         EXTENDED: "Extended",
         LEGACY: "Legacy",
         MODERN: "Modern",
         STANDARD: "Standard",
         VINTAGE: "Vintage",
         BLUE: "Azul",
         BLACK: "Preto",
         RED: "Vermelho",
         WHITE: "Branco",
         GREEN: "Verde",
         COLORLESS: "Incolor",
         ANY_COLOR: "Qualquer cor",
         VIEW_TITLE_ADVANCED_SEARCH: "Busca Avancada",
         TAB_TITLE_SIMPLE_SEARCH: "Busca Simples",
         TAB_TITLE_ADVANCED_SEARCH: "Busca Avançada",
         MENUITEM_LOGIN: "Entrar",
         MENUITEM_INFOGATHERER: "InfoGatherer",
         MENUITEM_CARD_SEARCH: "Buscar Carta",
         VIEW_TITLE_INFOGATHERER: "InfoGatherer",
         FIND: "Procurar",
         MULTIVERSE_ID_PLACEHOLDER: "Multiverse ID",
         MODAL_LOGIN_TITLE: "Entrar",
         CLOSE: "Fechar",
         USERNAME: "Nome de Usuário",
         PASSWORD: "Senha",
         LOG_ING: "Entrar",
         VIEW_TITLE_SETTINGS: "Configurações",
         MENUITEM_SETTINGS: "Configurações"
       });
  }

})();
