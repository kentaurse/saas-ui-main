import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react'
import * as React from 'react'
import * as yup from 'yup'
import { z } from 'zod'

import { LuInfo } from 'react-icons/lu'

import {
  FormLayout,
  SubmitButton,
  createForm,
  useBaseField,
  type GetBaseField,
} from '../src'

export default {
  title: 'Components/Forms/Field',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
}

const helpSchema = yup.object({
  email: yup.string().email().required().label('Email'),
})

import { onSubmit } from './helpers'
import { FiCheck, FiPhone } from 'react-icons/fi'
import { createZodForm } from '../zod/src'
import { createYupForm } from '../yup/src'
import { createAjvForm } from '../ajv/src'
import { splitProps } from '@saas-ui/core'

const ZodForm = createZodForm()
const YupForm = createYupForm()
const AjvForm = createAjvForm()
const Form = createForm()

export const Basic = () => (
  <Form
    defaultValues={{
      text: 'Text field',
      number: 10,
      textarea: 'Lorem ipsum',
      switch: true,
      select: 'Select 2',
      multipleselect: ['Select 1', 'Select 2'],
      nativeselect: 'Select 1',
      password: 'Password123',
      checkbox: true,
      radio: 'Radio 1',
      pin: '',
    }}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {({ Field }) => (
      <FormLayout>
        <Field name="text" label="Text" type="text" />
        <Field
          name="number"
          label="Number"
          type="number"
          min={1}
          max={10}
          placeholder="Number"
          leftAddon={<InputLeftElement>$</InputLeftElement>}
        />
        <Field name="textarea" label="Textarea" type="textarea" />
        <Field name="switch" label="Switch" type="switch" />
        <Field
          name="select"
          label="Select"
          type="select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
        />
        <Field
          name="multipleselect"
          label="Multiple Select"
          type="select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          multiple
        />
        <Field
          name="nativeselect"
          label="Native Select"
          type="native-select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
        />
        <Field name="password" label="Password" type="password" />
        <Field name="checkbox" label="Checkbox" type="checkbox" />
        <Field
          name="radio"
          label="Radio"
          type="radio"
          options={[{ value: 'Radio 1' }, { value: 'Radio 2' }]}
        />
        <Field name="pin" label="Pin" type="pin" pinLength={4} />

        <SubmitButton>Submit</SubmitButton>
      </FormLayout>
    )}
  </Form>
)

export const Horizontal = () => (
  <Form
    defaultValues={{
      text: 'Text field',
      number: 10,
      textarea: 'Lorem ipsum',
      switch: true,
      select: 'Select 2',
      multipleselect: ['Select 1', 'Select 2'],
      nativeselect: 'Select 1',
      password: 'Password123',
      checkbox: true,
      radio: 'Radio 1',
      pin: '',
    }}
    onSubmit={(values) => {
      console.log(values)
    }}
  >
    {({ Field }) => (
      <FormLayout>
        <Field name="text" label="Text" type="text" direction="row" />
        <Field
          name="number"
          label="Number"
          type="number"
          min={1}
          max={10}
          placeholder="Number"
          leftAddon={<InputLeftElement>$</InputLeftElement>}
          direction="row"
        />
        <Field
          name="textarea"
          label="Textarea"
          type="textarea"
          direction="row"
        />
        <Field name="switch" label="Switch" type="switch" direction="row" />
        <Field
          name="select"
          label="Select"
          type="select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          direction="row"
        />
        <Field
          name="multipleselect"
          label="Multiple Select"
          type="select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          multiple
          direction="row"
        />
        <Field
          name="nativeselect"
          label="Native Select"
          type="native-select"
          options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          direction="row"
        />
        <Field
          name="password"
          label="Password"
          type="password"
          direction="row"
        />
        <Field
          name="checkbox"
          label="Checkbox"
          type="checkbox"
          direction="row"
        />
        <Field
          name="radio"
          label="Radio"
          type="radio"
          options={[{ value: 'Radio 1' }, { value: 'Radio 2' }]}
          direction="row"
        />
        <Field
          name="pin"
          label="Pin"
          type="pin"
          pinLength={4}
          direction="row"
        />

        <SubmitButton>Submit</SubmitButton>
      </FormLayout>
    )}
  </Form>
)

export const WithZodSchema = () => {
  return (
    <ZodForm
      defaultValues={{
        text: 'Text field',
        number: 10,
        textarea: 'Lorem ipsum',
        switch: true,
        select: 'Select 1',
        multipleselect: ['Select 1', 'Select 2'],
        nativeselect: 'Select 1',
        password: 'Password123',
        checkbox: true,
        radio: 'Radio 1',
        pin: '',
      }}
      schema={z.object({
        text: z.string().min(3),
        number: z.preprocess(Number, z.number()),
        textarea: z.string(),
        switch: z.boolean(),
        select: z.string(),
        multipleselect: z.array(z.string()),
        nativeselect: z.string(),
        password: z.string(),
        checkbox: z.boolean(),
        radio: z.string(),
        pin: z.string(),
      })}
      onError={(errors) => {
        console.log(errors)
      }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ Field }) => (
        <FormLayout>
          <Field name="text" label="Text" type="text" />
          <Field name="number" label="Number" type="number" min={1} max={10} />
          <Field name="textarea" label="Textarea" type="textarea" />
          <Field name="switch" label="Switch" type="switch" />
          <Field
            name="select"
            label="Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field
            name="multipleselect"
            label="Multiple Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
            multiple
          />
          <Field
            name="nativeselect"
            label="Native Select"
            type="native-select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field name="password" label="Password" type="password" />
          <Field name="checkbox" label="Checkbox" type="checkbox" />
          <Field
            name="radio"
            label="Radio"
            type="radio"
            options={[{ value: 'Radio 1' }, { value: 'Radio 2' }]}
          />
          <Field name="pin" label="Pin" type="pin" pinLength={4} />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </ZodForm>
  )
}

export const WithYupSchema = () => {
  return (
    <YupForm
      defaultValues={{
        text: 'Text field',
        number: 10,
        textarea: 'Lorem ipsum',
        switch: true,
        select: 'Select 2',
        multipleselect: ['Select 1', 'Select 2'],
        nativeselect: 'Select 1',
        password: 'Password123',
        checkbox: true,
        radio: 'Radio 1',
        pin: '',
      }}
      schema={yup.object({
        text: yup.string().required(),
        number: yup.number().required(),
        textarea: yup.string().required(),
        switch: yup.boolean().required(),
        select: yup.string().required(),
        multipleselect: yup.array().of(yup.string()).required(),
        nativeselect: yup.string().required(),
        password: yup.string().required(),
        checkbox: yup.boolean().required(),
        radio: yup.string().required(),
        pin: yup.string().required(),
      })}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ Field }) => (
        <FormLayout>
          <Field name="text" label="Text" type="text" />
          <Field name="number" label="Number" type="number" min={1} max={10} />
          <Field name="textarea" label="Textarea" type="textarea" />
          <Field name="switch" label="Switch" type="switch" />
          <Field
            name="select"
            label="Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field
            name="multipleselect"
            label="Multiple Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
            multiple
          />
          <Field
            name="nativeselect"
            label="Native Select"
            type="native-select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field name="password" label="Password" type="password" />
          <Field name="checkbox" label="Checkbox" type="checkbox" />
          <Field
            name="radio"
            label="Radio"
            type="radio"
            options={[{ value: 'Radio 1' }, { value: 'Radio 2' }]}
          />
          <Field name="pin" label="Pin" type="pin" pinLength={4} />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </YupForm>
  )
}

// JSON Type Definition
// @see https://ajv.js.org/json-type-definition.html
const ajvSchema = {
  type: 'object',
  properties: {
    text: { type: 'string' },
    number: { type: 'number' },
    textarea: { type: 'string' },
    switch: { type: 'boolean' },
    select: { type: 'string' },
    multipleselect: { type: 'array', items: { type: 'string' } },
    nativeselect: { type: 'string' },
    password: { type: 'string' },
    checkbox: { type: 'boolean' },
    radio: { type: 'string' },
    pin: { type: 'string' },
  },
} as const // this is important

export const WithAjvSchema = () => {
  return (
    <AjvForm
      defaultValues={{
        text: 'Text field',
        number: 10,
        textarea: 'Lorem ipsum',
        switch: true,
        select: 'Select 2',
        multipleselect: ['Select 1', 'Select 2'],
        nativeselect: 'Select 1',
        password: 'Password123',
        checkbox: true,
        radio: 'Radio 1',
        pin: '',
      }}
      schema={ajvSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {({ Field }) => (
        <FormLayout>
          <Field name="text" label="Text" type="text" />
          <Field name="number" label="Number" type="number" min={1} max={10} />
          <Field name="textarea" label="Textarea" type="textarea" />
          <Field name="switch" label="Switch" type="switch" />
          <Field
            name="select"
            label="Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field
            name="multipleselect"
            label="Multiple Select"
            type="select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
            multiple
          />
          <Field
            name="nativeselect"
            label="Native Select"
            type="native-select"
            options={[{ value: 'Select 1' }, { value: 'Select 2' }]}
          />
          <Field name="password" label="Password" type="password" />
          <Field name="checkbox" label="Checkbox" type="checkbox" />
          <Field
            name="radio"
            label="Radio"
            type="radio"
            options={[{ value: 'Radio 1' }, { value: 'Radio 2' }]}
          />
          <Field name="pin" label="Pin" type="pin" pinLength={4} />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </AjvForm>
  )
}

type FormInputs = {
  text: string
  pattern: string
}

export const Rules = () => {
  return (
    <Form<FormInputs>
      defaultValues={{
        text: '',
        pattern: '',
      }}
      onSubmit={onSubmit}
    >
      {({ Field }) => (
        <FormLayout>
          <Field
            name="text"
            label="Text"
            rules={{ required: 'Text is required' }}
          />
          <Field
            name="pattern"
            label="Pattern"
            rules={{
              pattern: {
                value: /@/,
                message: 'Should include a @',
              },
            }}
          />
          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </Form>
  )
}

export const NoLabel = () => {
  return (
    <Form
      defaultValues={{
        text: '',
      }}
      onSubmit={onSubmit}
      onError={(err) => console.error(err)}
    >
      {({ Field }) => (
        <FormLayout>
          <Field name="text" placeholder="Placeholder" />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </Form>
  )
}

export const Invalid = () => {
  return (
    <Form
      defaultValues={{
        text: '',
      }}
      onSubmit={onSubmit}
      onError={(err) => console.error(err)}
    >
      {({ Field }) => (
        <FormLayout>
          <Field name="text" label="Invalid field" isInvalid />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </Form>
  )
}

export const Variants = () => {
  return (
    <Form onSubmit={onSubmit} onError={(err) => console.error(err)}>
      {({ Field }) => (
        <FormLayout>
          <Field name="outline" label="Outline" variant="outline" />
          <Field name="filled" label="Filled" variant="filled" />
          <Field name="flushed" label="Flushed" variant="flushed" />
          <Field name="unstyled" label="Unstyled" variant="unstyled" />
        </FormLayout>
      )}
    </Form>
  )
}

export const HelpText = () => {
  return (
    <Form
      defaultValues={{
        email: '',
      }}
      onSubmit={onSubmit}
    >
      {({ Field }) => (
        <FormLayout>
          <Field
            name="email"
            label="Email"
            type="email"
            help="We'll never share your email."
          />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </Form>
  )
}

export const WithId = () => {
  return (
    <Form
      defaultValues={{
        email: '',
      }}
      onSubmit={onSubmit}
    >
      {({ Field }) => (
        <FormLayout>
          <Field id="email" name="email" label="Email" type="email" />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </Form>
  )
}

const addonSchema = helpSchema.concat(
  yup.object({
    url: yup.string().url(),
    phone: yup.string().matches(/^\d+$/, 'Phone number is not valid'),
  })
)

export const WithAddons = () => {
  return (
    <YupForm schema={addonSchema} onSubmit={onSubmit}>
      {({ Field }) => (
        <FormLayout>
          <Field
            name="url"
            type="url"
            label="Url"
            leftAddon={<InputLeftAddon>https://</InputLeftAddon>}
          />

          <Field
            name="email"
            type="email"
            label="Email"
            rightAddon={<InputRightAddon>@saas-ui.dev</InputRightAddon>}
          />

          <Field
            name="phone"
            type="phone"
            leftAddon={
              <InputLeftElement>
                <FiPhone />
              </InputLeftElement>
            }
            rightAddon={
              <InputRightElement>
                <FiCheck />
              </InputRightElement>
            }
          />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </YupForm>
  )
}

export const WithEventHandlers = () => {
  return (
    <YupForm
      defaultValues={{
        email: '',
      }}
      onSubmit={onSubmit}
    >
      {({ Field }) => (
        <FormLayout>
          <Field
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={(e) => console.log(e)}
            onBlur={(e) => console.log(e)}
          />

          <SubmitButton>Submit</SubmitButton>
        </FormLayout>
      )}
    </YupForm>
  )
}

const getBaseField: GetBaseField<{ infoLabel?: string }> = () => {
  return {
    extraProps: ['infoLabel'],
    BaseField: (props) => {
      const { controlProps, label, help, hideLabel, error } =
        useBaseField(props)

      const isInvalid = !!error || controlProps.isInvalid

      const { direction, ...rest } = controlProps

      return (
        <FormControl
          {...rest}
          isInvalid={isInvalid}
          variant={direction === 'row' ? 'horizontal' : undefined}
        >
          {label && !hideLabel ? <FormLabel>{label}</FormLabel> : null}
          <Box>
            {props.children}
            {help && !error?.message ? (
              <FormHelperText>{help}</FormHelperText>
            ) : null}
            {error?.message && (
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            )}
          </Box>
        </FormControl>
      )
    },
  }
}

const CustomForm = createForm({
  getBaseField,
})

export const CustomBaseField = {
  render() {
    return (
      <CustomForm onSubmit={console.log} defaultValues={{ name: '' }}>
        {({ Field }) => {
          return (
            <FormLayout>
              <FormLayout>
                <Field
                  name="name"
                  type="text"
                  label="Name"
                  rules={{
                    required: 'Required',
                  }}
                />
              </FormLayout>
            </FormLayout>
          )
        }}
      </CustomForm>
    )
  },
}
