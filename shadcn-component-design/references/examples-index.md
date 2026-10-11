# Example index

Real shadcn/ui source, base-nova style (Base UI), imports rewritten to project paths. Read the closest match before writing a new component.

| Component | Built on | npm deps | Parts |
|---|---|---|---|
| **Forms** | | | |
| [button](examples/button.tsx) | button | – | 1: Button |
| [button-group](examples/button-group.tsx) | merge-props, use-render | – | 3: ButtonGroup, ButtonGroupText, ButtonGroupSeparator |
| [input](examples/input.tsx) | input | – | 1: Input |
| [input-group](examples/input-group.tsx) | composition | – | 6: InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea |
| [textarea](examples/textarea.tsx) | plain elements | – | 1: Textarea |
| [label](examples/label.tsx) | plain elements | – | 1: Label |
| [field](examples/field.tsx) | composition | – | 10: FieldSet, FieldLegend, FieldGroup, Field, FieldContent, FieldLabel … |
| [checkbox](examples/checkbox.tsx) | checkbox | – | 1: Checkbox |
| [radio-group](examples/radio-group.tsx) | radio, radio-group | – | 2: RadioGroup, RadioGroupItem |
| [switch](examples/switch.tsx) | switch | – | 1: Switch |
| [slider](examples/slider.tsx) | slider | – | 1: Slider |
| [toggle](examples/toggle.tsx) | toggle | – | 1: Toggle |
| [toggle-group](examples/toggle-group.tsx) | toggle, toggle-group | – | 2: ToggleGroup, ToggleGroupItem |
| [select](examples/select.tsx) | select | – | 9: SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem … |
| [native-select](examples/native-select.tsx) | plain elements | – | 3: NativeSelect, NativeSelectOption, NativeSelectOptGroup |
| [combobox](examples/combobox.tsx) | composition | – | 15: ComboboxValue, ComboboxTrigger, ComboboxClear, ComboboxInput, ComboboxContent, ComboboxList … |
| [input-otp](examples/input-otp.tsx) | plain elements | input-otp | 4: InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator |
| [calendar](examples/calendar.tsx) | composition | react-day-picker | 2: Calendar, CalendarDayButton |
| **Overlays** | | | |
| [dialog](examples/dialog.tsx) | dialog | – | 10: Dialog, DialogTrigger, DialogPortal, DialogClose, DialogOverlay, DialogContent … |
| [alert-dialog](examples/alert-dialog.tsx) | alert-dialog | – | 12: AlertDialog, AlertDialogTrigger, AlertDialogPortal, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader … |
| [sheet](examples/sheet.tsx) | dialog | – | 10: Sheet, SheetTrigger, SheetClose, SheetPortal, SheetOverlay, SheetContent … |
| [drawer](examples/drawer.tsx) | drawer | – | 11: Drawer, DrawerTrigger, DrawerPortal, DrawerClose, DrawerOverlay, DrawerSwipeHandle … |
| [popover](examples/popover.tsx) | popover | – | 6: Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription |
| [tooltip](examples/tooltip.tsx) | tooltip | – | 4: TooltipProvider, Tooltip, TooltipTrigger, TooltipContent |
| [hover-card](examples/hover-card.tsx) | preview-card | – | 3: HoverCard, HoverCardTrigger, HoverCardContent |
| [dropdown-menu](examples/dropdown-menu.tsx) | menu | – | 15: DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel … |
| [context-menu](examples/context-menu.tsx) | context-menu | – | 15: ContextMenu, ContextMenuPortal, ContextMenuTrigger, ContextMenuContent, ContextMenuGroup, ContextMenuLabel … |
| [menubar](examples/menubar.tsx) | menu, menubar | – | 16: Menubar, MenubarMenu, MenubarGroup, MenubarPortal, MenubarTrigger, MenubarContent … |
| [command](examples/command.tsx) | composition | cmdk | 9: Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup … |
| **Navigation & disclosure** | | | |
| [tabs](examples/tabs.tsx) | tabs | – | 4: Tabs, TabsList, TabsTrigger, TabsContent |
| [accordion](examples/accordion.tsx) | accordion | – | 4: Accordion, AccordionItem, AccordionTrigger, AccordionContent |
| [collapsible](examples/collapsible.tsx) | collapsible | – | 3: Collapsible, CollapsibleTrigger, CollapsibleContent |
| [breadcrumb](examples/breadcrumb.tsx) | merge-props, use-render | – | 7: Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator … |
| [pagination](examples/pagination.tsx) | composition | – | 7: Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext … |
| [navigation-menu](examples/navigation-menu.tsx) | navigation-menu | – | 8: NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuPositioner … |
| [sidebar](examples/sidebar.tsx) | merge-props, use-render | – | 23: SidebarProvider, Sidebar, SidebarTrigger, SidebarRail, SidebarInset, SidebarInput … |
| **Display** | | | |
| [card](examples/card.tsx) | plain elements | – | 7: Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent … |
| [badge](examples/badge.tsx) | merge-props, use-render | – | 1: Badge |
| [avatar](examples/avatar.tsx) | avatar | – | 6: Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount |
| [alert](examples/alert.tsx) | plain elements | – | 4: Alert, AlertTitle, AlertDescription, AlertAction |
| [table](examples/table.tsx) | plain elements | – | 8: Table, TableHeader, TableBody, TableFooter, TableRow, TableHead … |
| [chart](examples/chart.tsx) | plain elements | recharts | 3: ChartContainer, ChartTooltipContent, ChartLegendContent |
| [carousel](examples/carousel.tsx) | composition | embla-carousel-react | 5: Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext |
| [skeleton](examples/skeleton.tsx) | plain elements | – | 1: Skeleton |
| [spinner](examples/spinner.tsx) | plain elements | – | 1: Spinner |
| [progress](examples/progress.tsx) | progress | – | 5: Progress, ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue |
| [kbd](examples/kbd.tsx) | plain elements | – | 2: Kbd, KbdGroup |
| [separator](examples/separator.tsx) | separator | – | 1: Separator |
| [empty](examples/empty.tsx) | plain elements | – | 6: Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent |
| [item](examples/item.tsx) | merge-props, use-render | – | 10: ItemGroup, ItemSeparator, Item, ItemMedia, ItemContent, ItemTitle … |
| [aspect-ratio](examples/aspect-ratio.tsx) | plain elements | – | 1: AspectRatio |
| [scroll-area](examples/scroll-area.tsx) | scroll-area | – | 2: ScrollArea, ScrollBar |
| [resizable](examples/resizable.tsx) | plain elements | react-resizable-panels | 3: ResizablePanelGroup, ResizablePanel, ResizableHandle |
| **Feedback** | | | |
| [sonner](examples/sonner.tsx) | plain elements | next-themes, sonner | 0:  |
| [toast](examples/toast.tsx) | toast | – | 12: ToastProvider, ToastPortal, ToastViewport, Toast, ToastContent, ToastTitle … |
| **AI / chat** | | | |
| [message](examples/message.tsx) | plain elements | – | 6: MessageGroup, Message, MessageAvatar, MessageContent, MessageHeader, MessageFooter |
| [message-scroller](examples/message-scroller.tsx) | composition | @shadcn/react/message-scroller | 6: MessageScrollerProvider, MessageScroller, MessageScrollerViewport, MessageScrollerContent, MessageScrollerItem, MessageScrollerButton |
| [bubble](examples/bubble.tsx) | merge-props, use-render | – | 4: BubbleGroup, Bubble, BubbleContent, BubbleReactions |
| [attachment](examples/attachment.tsx) | merge-props, use-render | – | 9: Attachment, AttachmentMedia, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentActions … |
| [marker](examples/marker.tsx) | merge-props, use-render | – | 3: Marker, MarkerIcon, MarkerContent |
| [questionnaire](examples/questionnaire.tsx) | composition | @shadcn/react/questionnaire | 15: Questionnaire, QuestionnaireProgress, QuestionnaireItem, QuestionnaireTitle, QuestionnaireDescription, QuestionnaireChoices … |
| **Infrastructure** | | | |
| [direction](examples/direction.tsx) | direction-provider | – | 0:  |

`hooks/use-mobile.ts` is used by sidebar. `form` has no Base UI file — shadcn uses `field` for forms in this style.
