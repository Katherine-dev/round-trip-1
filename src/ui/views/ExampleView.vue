<template>
  <v-container fluid>
    <v-row>
      <!-- << это импровизированный флекс-контейнер -->
      <v-col align="center">
        <!-- << а это ячейка флекс-контейнера. С центирование контента посередине -->
        <v-btn>Это кнопка</v-btn> <!-- а это кнопка -->
      </v-col>
      <v-col align="center">
        <v-btn disabled>
          <!-- это тоже кнопка, но выключенная -->
          А это неактивная кнопка
        </v-btn>
      </v-col>
      <v-col align="center">
        <v-btn icon>
          <!-- И это тоже кнопка, но в стиле иконки. Иконка указывается в теге v-icon -->
          <v-icon>mdi-book</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./ExampleView" lang="ts" />
