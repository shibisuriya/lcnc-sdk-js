---
title: Form field
description: Installing and using custom components
sidebar:
  order: 4
---

## cell

### focused

- This api is only applicable for Editable table aka child table.
- This api tells whether the current cell of the editable table is focused or not (the blue outline). If it is focused then focused = true, else false.

Usage example,

```jsx
const FormField = (props) => {
  const {
    cell: { focused },
  } = props;

  return focused ? <h1>Focused</h1> : <h1>Not focused</h1>;
};
```

# value

The current value of the field.

# Field

## id

The id of the field,

## name

Name of the field.

## type

The datatype of the field.

## isRequired

Weather the field is mandatory or not...

## hint

The hint text that is configured for the custom field in the form wizard.

## defaultValue

The default value that is configured for the custom field in the form wizard.

## color

In form runtime, Kissflow platform will derive the color based on the current value that is store in the custom form field... It will tell you what color represents the current value (this is configurable in the form wizard), the custom field developer can use this color to decorate his custom field... What he chooses to do with this color is upto him, for example, he can use it apply a background color or change the font color...

## decimalPoints

- Only number based custom fields get this api.
- It gives the number of decimal points that was configured for the custom form field in the form wizard.

# actions

## updateValue

The custom form field developer has to call this hook (function) when he wants to update the current value of the custom form field.

Code example,

```js
const { value } = props;
onClick = () => {
  updateValue(value + 1);
};
```

The above written code increments the value of a number based custom field.

## parameters

The platform provides an hashMap of configured input parameters...

```json
{
  "max_length": 100,
  "gender": {
    "male label": "male value",
    "female label": "female value"
  },
  "username": "Shibi"
}
```

# readonly

The form can go through different step (for example, in process), in some steps the fields become uneditable... The platform will mark the custom form field as 'read-only' in that case.

# errors

The configured validations (and isRequired) will be evaluated by the platform and the derived error messages will be passed to the form field. This is an array of strings.
