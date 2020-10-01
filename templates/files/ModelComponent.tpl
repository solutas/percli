---
target: any
extension: js
name: ModelComponent
---
{
  "definitions": {
    "<%=name%>": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "text": {
          "type": "string",
          "x-source": "inject",
          "x-form-type": "texteditor"
        }
      }
    }
  }
}