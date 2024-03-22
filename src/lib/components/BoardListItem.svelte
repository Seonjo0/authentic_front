<script lang="ts">
	export let articles: string[] = ["", "", ""]
</script>

<div class="article-container">
	<div class="author">글쓴이: {articles[2]}</div>
	<div class="title">제목: {articles[0]}</div>
	<div class="content">내용: {articles[1]}</div>
</div>


<style>
	.article-container {
			display: flex;
			flex-direction: column;
			outline: steelblue solid 1px;
			margin-top: 10px;
      margin-bottom: 10px;
	}

	.title {
      margin: auto;
			font-size: x-large;
	}

  .content {
      margin: auto;
			font-size: large;
  }

  .article-container .author {
      margin-left: auto;
  }


</style>