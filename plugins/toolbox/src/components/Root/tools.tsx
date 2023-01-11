import { Base64Encode } from '../Encoders/Base64Encode';
import { UrlEncode } from '../Encoders/UrlEncode';
import { HtmlEntities } from '../Encoders/HtmlEntities';
import { NumberBase } from '../Converters/NumberBase';
import { MarkdownPreview } from '../Converters/MarkdownPreview';
import { CsvToJson } from '../Converters/CsvToJson';
import { JsonToCsv } from '../Converters/JsonToCsv';
import { JsonToYaml } from '../Converters/JsonToYaml';
import { YamlToJson } from '../Converters/YamlToJson';
import React from 'react';
import { Tool } from './Root';
import { StringCase } from '../Converters/StringCase';
import { TimeConverter } from '../Converters/TimeConverter';
import { EntityValidator } from '../Validators/EntityValidator';
import { Backslash } from '../Encoders/Backslash';
import { LoremIpsum } from '../Generators/LoremIpsum';
import { Hash } from '../Generators/Hash';

export const defaultTools: Tool[] = [
  {
    name: 'Base64',
    component: <Base64Encode />,
    category: 'Encoding/Decoding',
  },
  {
    name: 'URL',
    component: <UrlEncode />,
    category: 'Encoding/Decoding',
  },
  {
    name: 'HTML entities',
    component: <HtmlEntities />,
    category: 'Encoding/Decoding',
  },
  {
    name: 'Number base',
    component: <NumberBase />,
    category: 'Conversion',
  },
  {
    name: 'Markdown preview',
    component: <MarkdownPreview />,
  },
  {
    name: 'CSV to JSON',
    component: <CsvToJson />,
    category: 'Conversion',
  },
  {
    name: 'JSON to CSV',
    component: <JsonToCsv />,
    category: 'Conversion',
  },
  {
    name: 'JSON to YAML',
    component: <JsonToYaml />,
    category: 'Conversion',
  },
  {
    name: 'YAML to JSON',
    component: <YamlToJson />,
    category: 'Conversion',
  },
  {
    name: 'String case',
    component: <StringCase />,
    category: 'Conversion',
  },
  {
    name: 'Time converter',
    component: <TimeConverter />,
    category: 'Conversion',
  },
  {
    name: 'Entity validator',
    component: <EntityValidator />,
    category: 'Backstage',
  },
  {
    name: 'Backslash escape',
    component: <Backslash />,
    category: 'Encoding/Decoding',
  },
  {
    name: 'Lorem Ipsum',
    component: <LoremIpsum />,
    category: 'Generators',
  },
  {
    name: 'Hash',
    component: <Hash />,
    category: 'Generators',
  },
];