"use client";
import { useForm } from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger} from "./ui/popover";


const SearchForm = () => {
    const form = useForm();
  return (
    <div className="grid w-full items-end gap-4 rounded-lg bg-zinc-100 sm:grid-cols-2 lg:grid-cols-4 p-6">
       <Form {...form}>
         <FormField control={form.control} name="Address" render={({field}) => {
            return (
                <FormItem>
                    <FormLabel className=" text-orange-900">Property</FormLabel>
                    <Select>
                        <SelectTrigger className="text-purple-800">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Buy">Buy</SelectItem>
                            <SelectItem value="Sell">Sell</SelectItem>
                            <SelectItem value="Rent">Rent</SelectItem>
                        </SelectContent>
                    </Select>
                    </FormItem>
            );
         }}
         ></FormField>
         <FormField control={form.control} name="Address" render={({field}) =>{
            return (
                <FormItem>
                    <FormLabel className="text-orange-900">Address</FormLabel>
                    <FormControl>
                        <Input placeholder="Check the Address"/>
                    </FormControl>
                    </FormItem>
            );
         }}></FormField>
         <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-orange-800">Buy/Sell Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-orange-700 text-white hover:bg-purple-900">
         Search
        </Button>
       </Form>
    </div>
  );
};

export default SearchForm;