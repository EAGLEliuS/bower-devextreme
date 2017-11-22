/*!
* DevExtreme (dx.messages.ru.js)
* Version: 17.2.3 (build 17326)
* Build date: Wed Nov 22 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function(localization) {
    localization.loadMessages({
        ru: {
            Yes: "Да",
            No: "Нет",
            Cancel: "Отмена",
            Clear: "Очистить",
            Done: "Готово",
            Loading: "Загрузка...",
            Select: "Выбрать...",
            Search: "Поиск",
            Back: "Назад",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Нет данных для отображения",
            "validation-required": "Поле необходимо заполнить",
            "validation-required-formatted": "Необходимо заполнить: {0}",
            "validation-numeric": "Значение должно быть числом",
            "validation-numeric-formatted": "Значение поля {0} должно быть числом",
            "validation-range": "Значение поля не входит в диапазон",
            "validation-range-formatted": "Значение поля {0} не входит в диапазон",
            "validation-stringLength": "Неверная длина значения в поле",
            "validation-stringLength-formatted": "Неверная длина значения в поле {0}",
            "validation-custom": "Недопустимое значение",
            "validation-custom-formatted": "Недопустимое значение: {0}",
            "validation-compare": "Значения полей не соответствуют друг другу.",
            "validation-compare-formatted": "Значение поля {0} не соответствует",
            "validation-pattern": "Значение не соответствует шаблону",
            "validation-pattern-formatted": "Значение поля {0} не соответствует шаблону",
            "validation-email": "Недопустимое значение email",
            "validation-email-formatted": "Недопустимое значениe {0}",
            "validation-mask": "Недопустимое значение",
            "dxLookup-searchPlaceholder": "Минимальное количество символов: {0}",
            "dxList-pullingDownText": "Потяните, чтобы обновить...",
            "dxList-pulledDownText": "Отпустите, чтобы обновить...",
            "dxList-refreshingText": "Обновление...",
            "dxList-pageLoadingText": "Загрузка...",
            "dxList-nextButtonText": "Далее",
            "dxList-selectAll": "Выбрать все",
            "dxListEditDecorator-delete": "Удалить",
            "dxListEditDecorator-more": "Еще",
            "dxScrollView-pullingDownText": "Потяните, чтобы обновить...",
            "dxScrollView-pulledDownText": "Отпустите, чтобы обновить...",
            "dxScrollView-refreshingText": "Обновление...",
            "dxScrollView-reachBottomText": "Загрузка...",
            "dxDateBox-simulatedDataPickerTitleTime": "Выберите время",
            "dxDateBox-simulatedDataPickerTitleDate": "Выберите дату",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Выберите дату и время",
            "dxDateBox-validation-datetime": "Значение должно быть датой/временем",
            "dxFileUploader-selectFile": "Выберите файл",
            "dxFileUploader-dropFile": "или Перетащите файл сюда",
            "dxFileUploader-bytes": "байт",
            "dxFileUploader-kb": "кБ",
            "dxFileUploader-Mb": "МБ",
            "dxFileUploader-Gb": "ГБ",
            "dxFileUploader-upload": "Загрузить",
            "dxFileUploader-uploaded": "Загружено",
            "dxFileUploader-readyToUpload": "Готово к загрузке",
            "dxFileUploader-uploadFailedMessage": "Загрузка не удалась",
            "dxRangeSlider-ariaFrom": "От",
            "dxRangeSlider-ariaTill": "До",
            "dxSwitch-onText": "ВКЛ",
            "dxSwitch-offText": "ВЫКЛ",
            "dxForm-optionalMark": "необязательный",
            "dxForm-requiredMessage": " Поле {0} должно быть заполнено",
            "dxNumberBox-invalidValueMessage": "Значение должно быть числом",
            "dxDataGrid-columnChooserTitle": "Выбор столбцов",
            "dxDataGrid-columnChooserEmptyText": "Перетащите столбец сюда, чтобы скрыть его",
            "dxDataGrid-groupContinuesMessage": "Продолжение на следующей странице",
            "dxDataGrid-groupContinuedMessage": "Продолжение с предыдущей страницы",
            "dxDataGrid-groupHeaderText": "Сгруппировать данные по этому столбцу",
            "dxDataGrid-ungroupHeaderText": "Разгруппировать данные по этому столбцу",
            "dxDataGrid-ungroupAllText": "Сбросить группирование",
            "dxDataGrid-editingEditRow": "Редактировать",
            "dxDataGrid-editingSaveRowChanges": "Сохранить",
            "dxDataGrid-editingCancelRowChanges": "Отменить",
            "dxDataGrid-editingDeleteRow": "Удалить",
            "dxDataGrid-editingUndeleteRow": "Восстановить",
            "dxDataGrid-editingConfirmDeleteMessage": "Вы уверены, что хотите удалить эту запись?",
            "dxDataGrid-validationCancelChanges": "Отменить изменения",
            "dxDataGrid-groupPanelEmptyText": "Перетащите столбец сюда, чтобы сгруппировать по нему",
            "dxDataGrid-noDataText": "Нет данных",
            "dxDataGrid-searchPanelPlaceholder": "Искать...",
            "dxDataGrid-filterRowShowAllText": "(Все)",
            "dxDataGrid-filterRowResetOperationText": "Сбросить",
            "dxDataGrid-filterRowOperationEquals": "Равно",
            "dxDataGrid-filterRowOperationNotEquals": "Не равно",
            "dxDataGrid-filterRowOperationLess": "Меньше",
            "dxDataGrid-filterRowOperationLessOrEquals": "Меньше или равно",
            "dxDataGrid-filterRowOperationGreater": "Больше",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Больше или равно",
            "dxDataGrid-filterRowOperationStartsWith": "Начинается с",
            "dxDataGrid-filterRowOperationContains": "Содержит",
            "dxDataGrid-filterRowOperationNotContains": "Не содержит",
            "dxDataGrid-filterRowOperationEndsWith": "Заканчивается на",
            "dxDataGrid-filterRowOperationBetween": "В диапазоне",
            "dxDataGrid-filterRowOperationBetweenStartText": "Начало",
            "dxDataGrid-filterRowOperationBetweenEndText": "Конец",
            "dxDataGrid-applyFilterText": "Применить фильтр",
            "dxDataGrid-trueText": "Да",
            "dxDataGrid-falseText": "Нет",
            "dxDataGrid-sortingAscendingText": "Сортировать по возрастанию",
            "dxDataGrid-sortingDescendingText": "Сортировать по убыванию",
            "dxDataGrid-sortingClearText": "Сбросить сортировку",
            "dxDataGrid-editingSaveAllChanges": "Сохранить изменения",
            "dxDataGrid-editingCancelAllChanges": "Отменить изменения",
            "dxDataGrid-editingAddRow": "Добавить строку",
            "dxDataGrid-summaryMin": "Мин: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Мин по {1} : {0}",
            "dxDataGrid-summaryMax": "Макс: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Макс по {1} : {0}",
            "dxDataGrid-summaryAvg": "Срзнач: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Срзнач по {1} : {0}",
            "dxDataGrid-summarySum": "Сумм: {0}",
            "dxDataGrid-summarySumOtherColumn": "Сумм по {1} : {0}",
            "dxDataGrid-summaryCount": "Кол-во: {0}",
            "dxDataGrid-columnFixingFix": "Закрепить",
            "dxDataGrid-columnFixingUnfix": "Открепить",
            "dxDataGrid-columnFixingLeftPosition": "Налево",
            "dxDataGrid-columnFixingRightPosition": "Направо",
            "dxDataGrid-exportTo": "Экспортировать",
            "dxDataGrid-exportToExcel": "Экспортировать в Excel файл",
            "dxDataGrid-excelFormat": "Excel файл",
            "dxDataGrid-selectedRows": "Выбранные строки",
            "dxDataGrid-exportAll": "Экспортировать всё",
            "dxDataGrid-exportSelectedRows": "Экспортировать выбранные строки",
            "dxDataGrid-headerFilterEmptyValue": "(Пустое)",
            "dxDataGrid-headerFilterOK": "ОК",
            "dxDataGrid-headerFilterCancel": "Отменить",
            "dxDataGrid-ariaColumn": "Столбец",
            "dxDataGrid-ariaValue": "Значение",
            "dxDataGrid-ariaFilterCell": "Фильтр",
            "dxDataGrid-ariaCollapse": "Свернуть",
            "dxDataGrid-ariaExpand": "Развернуть",
            "dxDataGrid-ariaDataGrid": "Таблица данных",
            "dxDataGrid-ariaSearchInGrid": "Искать в таблице данных",
            "dxDataGrid-ariaSelectAll": "Выбрать всё",
            "dxDataGrid-ariaSelectRow": "Выбрать строку",
            "dxTreeList-ariaTreeList": "Иерархическая таблица данных",
            "dxTreeList-editingAddRowToNode": "Добавить",
            "dxPager-infoText": "Страница {0} из {1} (Всего элементов: {2})",
            "dxPager-pagesCountText": "из",
            "dxPivotGrid-grandTotal": "Итого",
            "dxPivotGrid-total": "{0} Всего",
            "dxPivotGrid-fieldChooserTitle": "Выбор полей",
            "dxPivotGrid-showFieldChooser": "Показать выбор полей",
            "dxPivotGrid-expandAll": "Раскрыть все",
            "dxPivotGrid-collapseAll": "Свернуть все",
            "dxPivotGrid-sortColumnBySummary": 'Сортировать "{0}" по этой колонке',
            "dxPivotGrid-sortRowBySummary": 'Сортировать "{0}" по этой строке',
            "dxPivotGrid-removeAllSorting": "Сбросить все сортировки",
            "dxPivotGrid-dataNotAvailable": "Н/Д",
            "dxPivotGrid-rowFields": "Поля строк",
            "dxPivotGrid-columnFields": "Поля столбцов",
            "dxPivotGrid-dataFields": "Поля данных",
            "dxPivotGrid-filterFields": "Поля фильтров",
            "dxPivotGrid-allFields": "Все поля",
            "dxPivotGrid-columnFieldArea": "Перетащите поля колонок cюда",
            "dxPivotGrid-dataFieldArea": "Перетащите поля данных cюда",
            "dxPivotGrid-rowFieldArea": "Перетащите поля строк cюда",
            "dxPivotGrid-filterFieldArea": "Перетащите поля фильтров cюда",
            "dxScheduler-editorLabelTitle": "Название",
            "dxScheduler-editorLabelStartDate": "Дата начала",
            "dxScheduler-editorLabelEndDate": "Дата завершения",
            "dxScheduler-editorLabelDescription": "Описание",
            "dxScheduler-editorLabelRecurrence": "Повторение",
            "dxScheduler-openAppointment": "Открыть задачу",
            "dxScheduler-recurrenceNever": "Никогда",
            "dxScheduler-recurrenceDaily": "Ежедневно",
            "dxScheduler-recurrenceWeekly": "Еженедельно",
            "dxScheduler-recurrenceMonthly": "Ежемесячно",
            "dxScheduler-recurrenceYearly": "Ежегодно",
            "dxScheduler-recurrenceEvery": "Интервал",
            "dxScheduler-recurrenceEnd": "Завершить повторение",
            "dxScheduler-recurrenceAfter": "Количество повторений",
            "dxScheduler-recurrenceOn": "Повторять до",
            "dxScheduler-recurrenceRepeatDaily": "дней(дня)",
            "dxScheduler-recurrenceRepeatWeekly": "недели(недель)",
            "dxScheduler-recurrenceRepeatMonthly": "месяца(месяцев)",
            "dxScheduler-recurrenceRepeatYearly": "года(лет)",
            "dxScheduler-recurrenceRepeatOnDate": "до даты",
            "dxScheduler-recurrenceRepeatCount": "повторений",
            "dxScheduler-switcherDay": "День",
            "dxScheduler-switcherWeek": "Неделя",
            "dxScheduler-switcherWorkWeek": "Рабочая неделя",
            "dxScheduler-switcherMonth": "Месяц",
            "dxScheduler-switcherTimelineDay": "Хронология дня",
            "dxScheduler-switcherTimelineWeek": "Хронология недели",
            "dxScheduler-switcherTimelineWorkWeek": "Хронология рабочей недели",
            "dxScheduler-switcherTimelineMonth": "Хронология месяца",
            "dxScheduler-switcherAgenda": "Расписание",
            "dxScheduler-allDay": "Весь день",
            "dxScheduler-confirmRecurrenceEditMessage": "Вы хотите отредактировать только это событие или всю серию?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Вы хотите удалить только это событие или всю серию?",
            "dxScheduler-confirmRecurrenceEditSeries": "Всю серию",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Всю серию",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Только это событие",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Только это событие",
            "dxScheduler-noTimezoneTitle": "Часовой пояс не выбран",
            "dxScheduler-moreAppointments": "и еще {0}",
            "dxCalendar-todayButtonText": "Сегодня",
            "dxCalendar-ariaWidgetName": "Календарь",
            "dxColorView-ariaRed": "Красный",
            "dxColorView-ariaGreen": "Зеленый",
            "dxColorView-ariaBlue": "Синий",
            "dxColorView-ariaAlpha": "Прозрачность",
            "dxColorView-ariaHex": "Код цвета",
            "dxTagBox-selected": "{0} выбрано",
            "dxTagBox-allSelected": "Выбрано все ({0})",
            "dxTagBox-moreSelected": "и еще {0}",
            "vizExport-printingButtonText": "Печать",
            "vizExport-titleMenuText": "Экспорт/Печать",
            "vizExport-exportButtonText": "{0} файл",
            "dxFilterBuilder-and": "И",
            "dxFilterBuilder-or": "Или",
            "dxFilterBuilder-notAnd": "Не И",
            "dxFilterBuilder-notOr": "Не Или",
            "dxFilterBuilder-addCondition": "Добавить условие",
            "dxFilterBuilder-addGroup": "Добавить группу",
            "dxFilterBuilder-enterValueText": "<введите значение>",
            "dxFilterBuilder-filterOperationEquals": "Равно",
            "dxFilterBuilder-filterOperationNotEquals": "Не равно",
            "dxFilterBuilder-filterOperationLess": "Меньше",
            "dxFilterBuilder-filterOperationLessOrEquals": "Меньше или равно",
            "dxFilterBuilder-filterOperationGreater": "Больше",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Больше или равно",
            "dxFilterBuilder-filterOperationStartsWith": "Начинается с",
            "dxFilterBuilder-filterOperationContains": "Содержит",
            "dxFilterBuilder-filterOperationNotContains": "Не содержит",
            "dxFilterBuilder-filterOperationEndsWith": "Заканчивается на",
            "dxFilterBuilder-filterOperationIsBlank": "Пусто",
            "dxFilterBuilder-filterOperationIsNotBlank": "Не пусто"
        }
    })
});
