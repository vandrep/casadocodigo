// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/casadocodigo$1.0.0/src/app/views/livros/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><head><title>Page Title</title></head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de livros</h1><form action=\"/livros\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\" value ($escapeXml(data.livro.id))><div><label for=\"titulo\">Título:</label><input type=\"text\" id=\"titulo\" name=\"titulo\" value=\"" +
    marko_escapeXmlAttr(data.livro.titulo) +
    "\" placeholder=\"Coloque aqui\"></div><div><label for=\"preco\">Preço</label><input type=\"text\" id=\"preco\" name=\"preco\" value=\"" +
    marko_escapeXmlAttr(data.livro.preco) +
    "\" placeholder=\"150.00\"></div><div><label for=\"descricao\">Descrição</label><textarea name=\"descricao\" id=\"descricao\" value=\"" +
    marko_escapeXmlAttr(data.livro.descricao) +
    "\" cols=\"20\" rows=\"10\" placeholder=\"Fale sobre o livro\"></textarea></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "17");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/casadocodigo$1.0.0/src/app/views/livros/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
