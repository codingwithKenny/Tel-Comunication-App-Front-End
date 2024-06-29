import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import "./GenericFormInput.css";

const GenericFormInput = ({ form, label, name, type, placeholder, onChange, onBlur, readOnly, onClick, options,price,message }) => {
  if (type === 'text'|| type === 'number') {
    return (
      <div>
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">{label}</FormLabel>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  {...field}
                  type={type}
                  readOnly={readOnly}
                  className="textInput"
                  onBlur={(e) => {
                    field.onBlur(e);
                    if (onBlur) onBlur(e);
                  }}
                  onChange={(e) => {
                    field.onChange(e);
                    if (onChange) onChange(e);
                  }}
                />
            
              </FormControl>
              <FormMessage>{message}</FormMessage>
             
            </FormItem>
          )}
        />
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div>
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="label">{label}</FormLabel>
              <Select

                onValueChange={(value) => {
                  field.onChange(value);
                  if (onChange) onChange({ target: { name, value,price } });
                }}
                  defaultValue={field.value}
                // disabled={readOnly}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="selectContent">

                  {options?.map((opt, i) => (      // loop through option passed as props to genericforminput/ but the options props also carry array of options
                      <SelectGroup key={i}>
                      <SelectLabel>{opt.label}</SelectLabel>
                      {opt.options?.map((optopt, r) => (
                        <SelectItem key={r} value={optopt.value}>
                          {optopt.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="errorMessage" />
            </FormItem>
          )}
        />
      </div>
    );
  }

  

  return null;
};

export default GenericFormInput;