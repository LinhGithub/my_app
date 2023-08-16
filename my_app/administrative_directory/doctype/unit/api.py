import frappe

@frappe.whitelist()
def get_unit_details(code_unit=None):
    print(code_unit)
    return frappe.db.sql(f"""SELECT name_unit,status_unit FROM `tabUnit` WHERE owner='Administrator'""",as_dict=True)