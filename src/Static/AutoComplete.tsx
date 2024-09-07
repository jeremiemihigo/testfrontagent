/* eslint-disable react/prop-types */
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const filter = createFilterOptions<any>();

interface AutoComplementProps {
  value: any;
  setValue: (value: any) => void;
  options: any[];
  title?: string;
  propr: string;
}

const AutoComplement: React.FC<AutoComplementProps> = ({
  value,
  setValue,
  options,
  title,
  propr,
}) => {
  return (
    <Autocomplete
      value={value}
      onChange={(_event, newValue) => {
        if (typeof newValue === "string") {
          setValue({ title: newValue });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({ title: newValue.inputValue });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option["" + propr];
      }}
      renderOption={(props, option) => {
        return <li {...props}>{option["" + propr]}</li>;
      }}
      sx={{ width: "100%" }}
      freeSolo
      renderInput={(params: TextFieldProps) => (
        <TextField {...params} label={title || "Titre"} />
      )}
    />
  );
};

export default AutoComplement;
