import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import "./GenericFormInput.css";

const GenericFormInput2 = ({ form, label, name, type, placeholder, onChange, onBlur, readOnly, onClick, options,price }) => {
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
              <FormMessage className="errorMessage" />
            </FormItem>
          )}
        />
      </div>
    );
  }

  if (type == 'select') {
    return (
      <div>
        <FormField
              control={form.control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="selectContent">
                        {options?.map((opt, i) => {
                          return (
                            <SelectItem key={i} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                );
              }}
            />


      </div>
    )

  }


  

  return null;
};

export default GenericFormInput2;