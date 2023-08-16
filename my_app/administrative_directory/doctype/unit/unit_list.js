frappe.listview_settings["Unit"] = {
  hide_name_column: true,

  onload: function (me) {
    me.$page.find(`div[data-fieldname='name']`).addClass("hide");
  },

  formatters: {
    status_unit(val) {
      let text = ["Hoạt động", "Khóa"];
      if (val == "true")
        return `
          <span class="ellipsis" title="Loại đơn vị: ${text[0]}">
            <span class="filterable indicator-pill green ellipsis" data-filter="type_unit,=, ${text[0]}">
              <span class="ellipsis"> ${text[0]} </span>
            </span>
          </span>
      `;
      return `
        <span class="ellipsis" title="Loại đơn vị: ${text[1]}">
          <span class="filterable indicator-pill red ellipsis" data-filter="type_unit,=, ${text[1]}">
            <span class="ellipsis"> ${text[1]} </span>
          </span>
        </span>
    `;
    },

    type_unit(val) {
      return `
        <span class="ellipsis" title="Loại đơn vị: ${val}">
            <span class="ellipsis"> ${val} </span>
        </span>
    `;
    },
  },
};
