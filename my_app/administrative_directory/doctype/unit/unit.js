// Copyright (c) 2023, mobiwork and contributors
// For license information, please see license.txt

frappe.ui.form.on("Unit", {
  refresh: function (frm) {
    // filter code parent
    frm.set_query("code_parent", function () {
      let my_filters = { type_unit: "####" };
      if (frm.doc.type_unit === "Quận huyện") {
        my_filters = { type_unit: "Tỉnh thành" };
      } else if (frm.doc.type_unit === "Xã phường") {
        my_filters = { type_unit: "Quận huyện" };
      }

      return {
        filters: my_filters,
      };
    });
  },
});
