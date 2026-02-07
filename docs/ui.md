# UI Components - shadcn/ui

## Overview

ALL UI elements in this application MUST use shadcn/ui components. Custom components should NOT be created unless absolutely necessary and approved.

## Rules

### 1. Component Usage
- **ALWAYS** use shadcn/ui components for all UI elements
- **NEVER** create custom UI components from scratch
- If a needed component doesn't exist in shadcn/ui, extend existing shadcn components

### 2. Installation
When a shadcn/ui component is needed that hasn't been installed:
```bash
npx shadcn@latest add [component-name]
```

### 3. Available Components
shadcn/ui provides a wide range of components including:
- **Layout**: Card, Separator, Tabs, Dialog, Sheet, Drawer
- **Forms**: Button, Input, Textarea, Select, Checkbox, Radio Group, Label, Form
- **Data Display**: Table, Badge, Avatar, Skeleton, Progress
- **Feedback**: Alert, Toast, Alert Dialog
- **Navigation**: Navigation Menu, Dropdown Menu, Command, Breadcrumb
- **Overlay**: Popover, Tooltip, Dialog, Sheet
- And many more...

### 4. Component Location
- All shadcn/ui components are installed to `components/ui/`
- Import components from `@/components/ui/[component-name]`

### 5. Customization
- Use Tailwind CSS classes for styling adjustments
- Modify components in `components/ui/` if absolutely necessary
- Maintain consistency with existing shadcn/ui design patterns

### 6. Before Creating Any UI Element
1. Check if a shadcn/ui component exists for the use case
2. Install the component if not already available
3. Compose multiple shadcn components if needed
4. Only as a last resort, consider extending shadcn components

## Examples

### ✅ Correct Approach
```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  )
}
```

### ❌ Incorrect Approach
```tsx
// DON'T create custom button components
export function CustomButton({ children }) {
  return <button className="custom-styles">{children}</button>
}

// DON'T create custom input components
export function CustomInput() {
  return <input className="custom-styles" />
}
```

## Reference
- shadcn/ui Documentation: https://ui.shadcn.com
- Browse components: https://ui.shadcn.com/docs/components
